import * as path from "path";
import { createGzip } from "zlib";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gzip = createGzip();
const source = createReadStream(
  path.join(__dirname, "files", "fileToCompress.txt")
);
const destination = createWriteStream(
  path.join(__dirname, "files", "archive.gz")
);

export const compress = async () => {
  pipeline(source, gzip, destination, (err) => {
    if (err) {
      process.exitCode = 1;
      throw new Error("FS operation failed");
    }
  });
};

compress();
