const express = require('express');

const app = express();
const PORT = 3000;
const allowedOrigins = ['http://localhost:5173', 'http://localhost:8080'];

app.use((req, res, next) => {
  if (allowedOrigins.includes(req.headers.origin)) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  }
  next();
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
