import express from 'express';

const app = express();

app.use((req, res) => {
  console.log('Method property of req:', req.method);
  res.send('hello world');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
