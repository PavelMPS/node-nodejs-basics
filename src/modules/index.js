import { unknownObject, createMyServer } from './cjsToEsm.mjs';

console.log('This is unknown object: ', unknownObject);

createMyServer.listen(8000, msg => {
    console.log('Server is running at 8000 port');
    console.log('Adress: http://localhost:8000/')
});
