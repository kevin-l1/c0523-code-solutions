import { readFile, writeFile } from 'node:fs/promises';

const [, , source, destination] = process.argv;

try {
  const data = await readFile(source);
  await writeFile(destination, data);
} catch (error) {
  console.error(error);
  process.exit(1);
}
