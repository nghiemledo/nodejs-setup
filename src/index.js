const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const { log } = require('console');
const app = express();
const port = 3000;

const route = require('./routes/index');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

// Handle post request from form XMLHttpRequest, fetch, axios
app.use(express.urlencoded({ extended: true }));

app.engine(
  'hbs',
  hbs.engine({
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
