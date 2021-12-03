const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;
const handlebars = exphbs.create({ extname: '.hbs' });

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
  res.render('home');
})
 
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));