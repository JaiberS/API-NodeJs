const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const router = require('./src/Router');
const bodyParser = require('body-parser');
const config = require('./config/config');

app.use(cors())
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);

const listener = app.listen(config.port, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
