const { addTrainer } = require('../controllers/adminController');

const router = require('express').Router();



// Define your authentication routes here
router.post('/addTrainer', addTrainer);

module.exports = router;