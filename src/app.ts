import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello Docker!' });
});

app.get('/users', (req, res) => {
  return res.status(200).json({ message: 'Users route!' });
});

export { app };
