import { Worker } from "worker_threads";
import os from "os";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
  const cores = os.cpus().length;
  const promises = [];
  for (let i = 0; i < cores; i++) {
    promises[i] = new Promise((resolve, reject) => {
      const worker = new Worker(path.join(__dirname, "./worker.js"), {
        workerData: 10 + i,
      });
      worker.on("message", (msg) => {
        resolve(msg);
      });
      worker.on("error", (msg) => {
        reject(msg);
      });
    });
  }
  const result = await Promise.all(promises);
  console.log(result);
};

performCalculations();

//Вы можете проверить используя команду npm run wt:main
//Или используя node main (находясь папке wt)
