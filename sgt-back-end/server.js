import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';
// import pg from 'pg';

// const db = new pg.Pool({
//   connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

const app = express();

app.use(express.json());

app.get('/api/notes', async (req, res) => {
  const notesArray = [];
  try {
    const contents = await readFile('./data.json', 'utf8');
    const data = JSON.parse(contents);
    const { notes } = data;
    for (const key in notes) {
      notesArray.push(notes[key]);
    }
    if (notes) {
      res.json(notesArray);
    }
  } catch (error) {
    res.json([]);
  }
});

app.get('/api/notes/:id', async (req, res) => {
  const errorResponse = {};
  try {
    const contents = await readFile('./data.json', 'utf8');
    const data = JSON.parse(contents);
    const { notes } = data;

    if (parseInt(req.params.id) < 0) {
      errorResponse.error = 'id must be a positive integer';
      throw new Error();
    }
    if (notes[parseInt(req.params.id)] === undefined) {
      errorResponse.error = `cannot find note with id ${req.params.id}`;
      throw new Error();
    }

    res.status(200).json(notes[parseInt(req.params.id)]);
    return;
  } catch (error) {
    switch (errorResponse.error) {
      case 'id must be a positive integer':
        res.status(400).send(errorResponse);
        break;
      case `cannot find note with id ${req.params.id}`:
        res.status(404).send(errorResponse);
        break;
      default:
        errorResponse.error = 'an unexpected error has occured';
        res.status(500).send(errorResponse);
        break;
    }
  }
});

app.post('/api/notes', async (req, res) => {
  const errorResponse = {};
  try {
    const contents = await readFile('./data.json', 'utf8');
    const data = JSON.parse(contents);

    if (req.body.content === undefined) {
      errorResponse.error = 'content is a required field';
      throw new Error();
    }

    const notes = { id: data.nextId, content: req.body.content };
    const id = data.nextId;

    data.notes[id] = notes;
    data.nextId++;
    await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
    res.status(201).json(data.notes[id]);
  } catch (error) {
    switch (errorResponse.error) {
      case 'content is a required field':
        res.status(400).send(errorResponse);
        break;
      default:
        errorResponse.error = 'an unexpected error has occured';
        res.status(500).send(errorResponse);
        break;
    }
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  const errorResponse = {};
  try {
    const contents = await readFile('./data.json', 'utf8');
    const data = JSON.parse(contents);

    if (parseInt(req.params.id) < 0) {
      errorResponse.error = 'id must be a positive integer';
      throw new Error();
    }

    if (!data.notes[req.params.id]) {
      errorResponse.error = `cannot find note with id ${req.params.id}`;
      throw new Error();
    }

    delete data.notes[req.params.id];
    await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
    res.status(204).send();
  } catch (error) {
    switch (errorResponse.error) {
      case 'id must be a positive integer':
        res.status(400).send(errorResponse);
        break;
      case `cannot find note with id ${req.params.id}`:
        res.status(404).send(errorResponse);
        break;
      default:
        errorResponse.error = 'an unexpected error has occured';
        res.status(500).send(errorResponse);
        break;
    }
  }
});

app.put('/api/notes/:id', async (req, res) => {
  const errorResponse = {};
  const content = req.body.content;
  try {
    const contents = await readFile('./data.json', 'utf8');
    const data = JSON.parse(contents);

    if (parseInt(req.params.id) < 0) {
      errorResponse.error = 'id must be a positive integer';
      throw new Error();
    }

    if (!req.body.content) {
      errorResponse.error = 'content is a required field';
      throw new Error();
    }

    if (!data.notes[req.params.id]) {
      errorResponse.error = `cannot find note with id ${req.params.id}`;
      throw new Error();
    }

    data.notes[req.params.id].content = content;
    await writeFile('./data.json', JSON.stringify(data, null, 2), 'utf8');
    res.status(204).send();
  } catch (error) {
    switch (errorResponse.error) {
      case 'id must be a positive integer':
        res.status(400).send(errorResponse);
        break;
      case 'content is a required field':
        res.status(400).send(errorResponse);
        break;
      case `cannot find note with id ${req.params.id}`:
        res.status(404).send(errorResponse);
        break;
      default:
        errorResponse.error = 'an unexpected error has occured';
        res.status(500).send(errorResponse);
        break;
    }
  }
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
