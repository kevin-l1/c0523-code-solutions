import { readFile } from 'node:fs/promises';

async function readAny(arg) {
  try {
    const filePath = new URL(arg, import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (error) {
    console.log(error.message);
  }
}

await readAny(process.argv[2]);
