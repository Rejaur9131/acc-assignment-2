const express = require('express');
const cors = require('cors');
// const Tour = require('./models/tour');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

//routes
const tourRoute = require('./routes/tour.route');

app.get('/', (req, res) => {
  res.send('Yay! app is running on For Assignment');
});

//posting to database
app.use('https://acc-assignment-2-f8hq.onrender.com/api/v1/tour', tourRoute);

module.exports = app;
