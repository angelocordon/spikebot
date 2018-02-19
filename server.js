require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello world');
});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${port}!`);
});

module.exports = app;
