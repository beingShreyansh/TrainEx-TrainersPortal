  const Trainer = require("../models/trainerModel");

  const getTrainers = async (req, res) => {
      const { pageLimit, page } = req.body;
      try {
        const trainer = await Trainer.find({})
          .select({ name: 1, skills: 1, imageUrl: 1 , fees:1})
          .limit(pageLimit * 1)
          .skip((page - 1) * pageLimit)
          .sort({ fees: -1 })
          .exec();
        res.json({ success: true, trainer });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
  };

  module.exports = { getTrainers };
