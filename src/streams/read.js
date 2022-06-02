import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    let myReadStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf-8');
    myReadStream.on('data', chunk => {
        process.stdout.write(chunk);
    })
};

read();
