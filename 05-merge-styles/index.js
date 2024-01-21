const fs = require('fs');
const path = require('node:path');
const { readdir, readFile } = require('node:fs/promises');

async function complStyles() {
  const writeStream = fs.createWriteStream(path.join(__dirname, 'project-dist/', 'bundle.css'), {
    encoding: 'utf8'
  });
  const fileCopyArr = await readdir(path.join(__dirname, 'styles/'), {withFileTypes: true});
  const filesAll = [];
  for (let file of fileCopyArr) {
    if (file.name.includes('.css')) {
        filesAll.push(file);
    }
  }

  for (let file of filesAll) {
    const stylesText = await readFile(path.join(__dirname, 'styles/', file.name), {
        encoding: 'utf8'
    });
    writeStream.write(stylesText + '\n');
  }
}

complStyles();