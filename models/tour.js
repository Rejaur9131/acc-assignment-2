const mongoose = require('mongoose');

// Schema design

const tourSchema = mongoose.Schema({
  name: { type: String, required: true },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
