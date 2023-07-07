import { writeFile } from 'node:fs/promises';

try {
  await writeFile('random.txt', Math.random() + '\n', 'utf8');
} catch (error) {
  console.error(error);
  process.exit(1);
}
