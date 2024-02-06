const router = require('express').Router();

const { getTrainers } = require('../controllers/homeControllers');



// Define your authentication routes here
router.post('/getTrainers', getTrainers);

module.exports = router;