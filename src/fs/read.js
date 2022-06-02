import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    fs.readFile(
        path.join(__dirname, 'files', 'fileToRead.txt'),
        'utf-8',
        (err, data) => {
            if (err) throw new Error('FS operation failed');
            console.log(data);
        }
    );
};

read();
