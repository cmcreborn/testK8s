'use strict';

const express = require('express');

// Constants
const PORT = 5566;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.post('/', function (req, res) {
  res.send('Hello world...via post');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
