import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const readFilePath = path.join(__dirname, "files", "fileToRead.txt");

export const read = async () => {
  fs.access(readFilePath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
  fs.readFile(readFilePath, "utf-8", (err, data) => {
    if (err) throw new Error("FS operation failed");
    console.log(data);
  });
};

read();

//Вы можете проверить используя команду npm run fs:read
//Или используя node read (находясь в папке fs) 