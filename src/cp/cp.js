import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { fork } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
  const child = fork(path.join(__dirname, "files", "script.js"), args);
  child.on("error", (err) => {
    if (err) throw new Error("Child error!");
  });
};

spawnChildProcess(["arg1", "arg2", "arg3"]);
