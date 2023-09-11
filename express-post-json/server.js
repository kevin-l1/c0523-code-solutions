import express from 'express';

let nextId = 1;
const grades = {};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  if (!grade.name || !grade.course || !grade.score) {
    res.status(400).send('Incomplete request');
    return;
  }
  const id = nextId++;
  grade.id = id;
  grades[id] = grade;
  res.sendStatus(201).send(grade);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
