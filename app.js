require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const configuer = require('./config');
const main = require('./main');

const config = (process.env.NODE_ENV === 'debug') ? configuer().debug : configuer().product;
const app = express();

app.use(logger('combined'));
app.use(helmet());
app.use(bodyParser.json());

app.use('/', main);

app.listen(config.port, () => {
  console.log(`Application ${config.appName} has been started.`);
});
