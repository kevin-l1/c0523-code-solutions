import express from 'express';

let nextId = 1;
const gradesArray = [];

const app = express();

app.get('/api/grades', (req, res) => {
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const grades = req.body;
  grades.id = nextId;
  nextId++;
  gradesArray.push(grades);
  res.sendStatus(201);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
