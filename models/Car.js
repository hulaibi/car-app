const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  model: { type: String, require: true },
  year: { type: Number, require: true },
  condition: { type: String, require: true },
  isAvailable: { type: Boolean, require: true },
  owner: { ObjectId, ref: "User" },
});

const Car = new mongoose.model("Car", CarSchema);

module.exports = Car;
