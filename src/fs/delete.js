import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
    fs.unlink(path.join(__dirname, 'files', 'fileToRemove.txt'), err => {
        if (err) throw new Error('FS operation failed');
    })
};

remove();
