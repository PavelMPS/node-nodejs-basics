import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathFilesDirectory = path.join(__dirname, 'files');

export const rename = async () => {
    fs.access(path.join(pathFilesDirectory, 'wrongFilename.md'), err => {
        if (!err) {
            throw new Error('FS operation failed'); 
        }
    });
    fs.access(path.join(pathFilesDirectory, 'wrongFilename.txt'), err => {
        if (err) {
            throw new Error('FS operation failed'); 
        }
    });
    fs.rename(
        path.join(pathFilesDirectory, 'wrongFilename.txt'),
        path.join(pathFilesDirectory, 'wrongFilename.md'),
        err => {
            if (err) throw new Error('FS operation failed');
        }
    ); 
};

rename();
