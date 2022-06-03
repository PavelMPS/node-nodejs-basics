import { Transform } from 'stream';

const reverseText = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.reverse());
    }
})

export const transform = async () => {
    process.stdin.pipe(reverseText).pipe(process.stdout);
};

transform();
