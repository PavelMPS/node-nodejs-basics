import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathBaseFolder = path.join(__dirname, "files");
const pathCopyFolder = path.join(__dirname, "files-copy");

export const copy = async () => {
  fs.access(pathBaseFolder, err => {
    if (err) {
        throw new Error('FS operation failed'); 
    } else {
      fs.mkdir(pathCopyFolder, { recursive: true }, err => {
        if (err) throw new Error('FS operation failed');
      });
    
      fs.readdir(pathBaseFolder, (err, files) => {
        if (err) throw err;
        files.forEach((file) => {
          fs.copyFile(
            path.join(pathBaseFolder, file),
            path.join(pathCopyFolder, file),
            err => {
                if (err) throw new Error('FS operation failed');
            }
          );
        });
      });
    }
  });
  fs.access(pathCopyFolder, err => {
    if (!err) {
        throw new Error('FS operation failed'); 
    }
  });
};

copy();
