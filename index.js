const express = require('express');
const newRouter = require('./routes/new');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/new', newRouter);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}...`);
});