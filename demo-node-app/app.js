const express = require('express');
const path = require('path')
const routes = require('./routes/index');

const app = express();
const bodyParser = require('body-parser');

app.set('views', path.join(_dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended:true}));
app.use('/', routes);

module.exports = app;