import express from 'express';

// const nextId = 1;
const grades = {};

const app = express();

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use('/api/grades', (req, res) => {
  express.json();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
