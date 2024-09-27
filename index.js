const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/index');
const newRouter = require('./routes/new');
const messageRouter = require('./routes/message');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/message', messageRouter);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}...`);
});