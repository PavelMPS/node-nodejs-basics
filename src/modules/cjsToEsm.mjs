import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { release, version } from "os";
import http from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import a from "./files/a.json" assert { type: "json" };
import b from "./files/b.json" assert { type: "json" };

import("./files/c.js");

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = a;
} else {
  unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = http.createServer((_, res) => {
  res.end("Request accepted");
});

export { unknownObject, createMyServer };
