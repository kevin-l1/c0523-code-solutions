import { readFile } from 'node:fs/promises';

async function dijkstra() {
  try {
    const filePath = new URL('./dijkstra.txt', import.meta.url);
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (error) {
    console.log(error.message);
  }
}

await dijkstra();
