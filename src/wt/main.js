import { Worker } from "worker_threads";
import os from "os";

export const performCalculations = async () => {
  const cores = os.cpus().length;
  const promises = [];
  for (let i = 0; i < cores; i++) {
    promises[i] = new Promise((resolve, reject) => {
      const worker = new Worker("./worker.js", {
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
