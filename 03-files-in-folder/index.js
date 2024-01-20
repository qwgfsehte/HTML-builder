const fs = require('fs');
const path = require('node:path');
const { readdir, stat } = require('fs/promises');

const pathName = path.join(__dirname, 'secret-folder/')

async function isDir (path) {
  const nameFile = await readdir(path, {withFileTypes: true});
  for (let file of nameFile) {
    if (!file.isDirectory()) {
      let fileStat = await stat(pathName + file.name);
      console.log(file.name.split('.').join(' - ') + ' - ' + fileStat.size + 'b')
    }
  }
}
isDir(pathName);