const mongoose = require('mongoose');
const mongodb = require('mongodb');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = require('./app');

// database connection
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(`Database connection successfull`);
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
