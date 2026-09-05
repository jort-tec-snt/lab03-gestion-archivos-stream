const { Transform } = require('stream');
const fs = require('fs');
const path = require('path');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

const readStream = fs.createReadStream(path.join(__dirname, 'texto.txt'));
const writeStream = fs.createWriteStream(path.join(__dirname, 'texto_mayusculas.txt'));

readStream.pipe(transformStream).pipe(writeStream);

writeStream.on('finish', () => console.log('Archivo convertido a mayúsculas con éxito.'));