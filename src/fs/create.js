import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, "files", "fresh.txt");

export const create = async () => {
  fs.access(filePath, (err) => {
    if (!err) {
      throw new Error("FS operation failed");
    }
  });
  fs.writeFile(filePath, "I am fresh and young", (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

create();

//Вы можете проверить используя команду npm run fs:create
//Или используя node create (находясь в папке fs)
