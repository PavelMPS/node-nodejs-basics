import * as path from "path";
import { createGunzip } from "zlib";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gunzip = createGunzip();
const source = createReadStream(path.join(__dirname, 'files', 'archive.gz'));
const destination = createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));

export const decompress = async () => {
     pipeline(source, gunzip, destination, err => {
         if(err) {
            process.exitCode = 1;
            throw new Error('FS operation failed');
         }
     })
};

decompress();
