import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import * as readline from "node:readline";
import { stdin as input, stdout as output } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const readLine = readline.createInterface({ input, output });
const myWriteStream = fs.createWriteStream(
  path.join(__dirname, "files", "fileToWrite.txt"),
  "utf-8"
);

export const write = async () => {
  process.stdout.write("Hello! Please enter any data: ");
  readLine.on("line", (data) => {
    myWriteStream.write(data + "\n", (err) => {
      if (err) throw new Error("Something wrong!");
    });
  });
};

write();
