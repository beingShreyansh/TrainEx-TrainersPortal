// TrainerModel.js
const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  imageUrl: {
    type: String,
    default:"https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
  },
  bio: {
    type: String,
  },
  fees:{
    type:Number,
  },
  enrolledStudents:{
    type: Number
  }
});

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;
