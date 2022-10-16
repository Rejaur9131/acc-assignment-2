const mongoose = require('mongoose');
const mongodb = require('mongodb');
const port = 'https://acc-assignmen-2.onrender.com/api/v1/tour';

const app = require('./app');

// database connection
mongoose.connect('mongodb://localhost:27017/tours').then(() => {
  console.log(`Database connection successfull`);
});

app.listen(port, () => {
  console.log('App is listening on port 5000');
});
