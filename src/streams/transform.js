import { Transform } from "stream";

const reverseText = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.reverse() + "\n");
  },
});

export const transform = async () => {
  process.stdin.pipe(reverseText).pipe(process.stdout);
};

transform();

//Вы можете проверить используя команду npm run streams:transform
//Или используя node transform (находясь в папке streams)
