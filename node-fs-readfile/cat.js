import { readFile } from 'node:fs/promises';

async function cat(args) {
  try {
    for (let i = 2; i < args.length; i++) {
      const filePath = new URL(args[i], import.meta.url);
      const contents = await readFile(filePath, { encoding: 'utf8' });
      console.log(contents);
    }
  } catch (error) {
    console.log(error.message);
  }
}

await cat(process.argv);
