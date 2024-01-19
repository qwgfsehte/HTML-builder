const fs = require('fs');
const path = require('node:path');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { stdout } = require('process');

const rl = readline.createInterface({ input, output });
const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'), {
  encoding: 'utf8'
});
rl.write('Привет! Напечатай что-нибудь:\n');
rl.on('line', (input) => {
  if (input.includes('exit')) {
    rl.close();
  } else {
    writeStream.write(`${input}\n`);
  }
});
rl.on('close', (input) => {
    rl.close();
    stdout.write('Пока, приходи ещё!');
});