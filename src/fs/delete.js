import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const removePath = path.join(__dirname, "files", "fileToRemove.txt");

export const remove = async () => {
  fs.access(removePath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
  fs.unlink(removePath, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

remove();

//Вы можете проверить используя команду npm run fs:delete
//Или используя node delete (находясь в папке fs)
