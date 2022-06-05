import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folderPath = path.join(__dirname, "files");

export const list = async () => {
  fs.access(folderPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
  fs.readdir(folderPath, (err, files) => {
    if (err) throw new Error("FS operation failed");
    console.log(files);
  });
};

list();
