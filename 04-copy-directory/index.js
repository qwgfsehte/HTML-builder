const fs = require('fs');
const path = require('path');
const { mkdir, rm, readdir, copyFile } = require('node:fs/promises');

async function createFiles(dir, dirCopy) {
  const fileCopyArr = await readdir(dir, {withFileTypes: true});
  for (let file of fileCopyArr) {
    await copyFile(path.join(dir, file.name), path.join(dirCopy, file.name));
  }
}

async function createDir(dir) {
  await rm(path.join(__dirname, `${dir}-copy`), { recursive: true, force: true });
  await mkdir(path.join(__dirname, `${dir}-copy`), { recursive: true });
  createFiles(path.join(__dirname, dir), path.join(__dirname, `${dir}-copy`));
}

createDir('files');