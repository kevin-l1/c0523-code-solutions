import { readFile, writeFile } from 'node:fs/promises';

const command = process.argv.slice(2);
const contents = await readFile('./data.json', 'utf8');
const data = JSON.parse(contents);
const { notes } = data;

async function read() {
  try {
    for (const key in notes) {
      console.log(`${key}: ${notes[key]}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function create() {
  const [, , , note] = process.argv;

  try {
    notes[data.nextId] = note;
    data.nextId++;
    await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

async function deleteItem() {
  const noteId = command[1];
  try {
    if (notes[noteId]) {
      delete notes[noteId];
      await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
    } else {
      console.log('ID is not valid');
    }
  } catch (error) {
    console.error(error);
  }
}

async function addNote() {
  const noteId = command[1];
  const newNote = command[2];
  try {
    if (notes[noteId]) {
      notes[noteId] = newNote;
      await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
    } else {
      console.log('ID is not valid');
    }
  } catch (error) {
    console.error(error);
  }
}

if (command) {
  switch (process.argv[2]) {
    case 'read':
      await read(data);
      break;
    case 'create':
      await create(data);
      break;
    case 'delete':
      await deleteItem(data);
      break;
    case 'update':
      await addNote(data);
      break;
    default:
      console.log('Command is invalid');
  }
}
