const express = require('express');
const path = require('node:path');
const newRouter = require('./routes/new');
const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/new', newRouter);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}...`);
});