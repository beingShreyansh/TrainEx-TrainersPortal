const Trainer = require("../models/trainerModel");

const getTrainers = async (req, res) => {
  const { pageLimit, page } = req.body;
  const { filters } = req.body;

  try {
    let filterObject = {};

    if (filters && Object.keys(filters).length > 0) {
      for (const key in filters) {
        filterObject[key] = { $regex: new RegExp(filters[key], "i") };
      }
    }

    const trainers = await Trainer.find(filterObject)
      .select({ name: 1, skills: 1, imageUrl: 1, fees: 1 })
      .limit(pageLimit * 1)
      .skip((page - 1) * pageLimit)
      .sort({ fees: -1 })
      .exec();

    res.json({ success: true, trainers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { getTrainers };
