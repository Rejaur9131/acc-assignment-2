const Tour = require('../models/tour');

exports.getTourService = async () => {
  const tour = await Tour.find({});
  return tour;
};

exports.createTourService = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};
