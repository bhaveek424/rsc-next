import fs from 'fs';
import path from 'path';

export function readFile(localPath) {
  return fs.readFileSync(path.join(process.cwd(), localPath), 'utf-8');
}

export function writeFile(localPath, content) {
  return fs.writeFileSync(path.join(process.cwd(), localPath), content, {
    encoding: 'utf-8',
  });
}
