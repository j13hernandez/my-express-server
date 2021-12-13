const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Call me!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>This page is owned by Palma</h1>');
});

app.get('/hobbies', (req, res) => {
  res.send('<ul><li>Basketball</li><li>Coding</li><li>Gardening</li></ul>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
