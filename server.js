const mongoose = require('mongoose');
const mongodb = require('mongodb');

const app = require('./app');

// database connection
mongoose.connect('mongodb://localhost:27017/tours').then(() => {
  console.log(`Database connection successfull`);
});

app.listen(5000, () => {
  console.log('App is listening on port 5000');
});
