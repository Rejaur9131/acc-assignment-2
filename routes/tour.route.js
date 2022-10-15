const express = require('express');
const router = express.Router();
const tourController = require('../conrollers/tour.controller');

router.route('/').get(tourController.getTours).post(tourController.createTour);

module.exports = router;
