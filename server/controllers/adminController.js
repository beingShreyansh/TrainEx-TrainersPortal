const Trainer = require("../models/trainerModel");

const addTrainer = async (req, res) => {
  try {
    const trainer = req.body;
    if (!trainer) {
      return res.status(405).send('Field Missing');
    }
    const newTrainer = new Trainer(trainer);
    await newTrainer.save();
    
    res.status(201).json({ msg: 'success' });
  } catch (error) {
    console.error('Error adding Trainer:', error.message);
    res.status(500).send(error.message);
  }
};


module.exports = { addTrainer};