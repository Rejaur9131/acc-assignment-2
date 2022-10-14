const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');

const app = express();

app.get('/', (req, res) => {
  res.send('ACC assignment 2 just started now on');
});

app.listen(5000, () => {
  console.log('App is listening on port 5000');
});
