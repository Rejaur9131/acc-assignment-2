const Tour = require('../models/tour');
const {
  getTourService,
  createTourService,
} = require('../services/tour.services');

exports.getTours = async (req, res, next) => {
  try {
    const tours = await getTourService();
    res.status(200).json({
      status: 'success',
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Unable to get tours',
      error: error.message,
    });
  }
};

exports.createTour = async (req, res, next) => {
  try {
    const result = await createTourService(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Data inserted successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Data not inserted',
      error: error.message,
    });
  }
};
