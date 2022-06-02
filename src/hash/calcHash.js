import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import * as crypto from 'crypto';

export const calculateHash = async () => {
    fs.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'), 'utf-8', 
    (err, data) => {
        if (err) throw new Error('FS operation failed');
        const hash = crypto.createHash('sha256').update(data).digest('base64');
        console.log(hash);
    })
};

calculateHash();
