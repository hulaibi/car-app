const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  model: { type: String, require: true },
  year: { type: Number, require: true },
  condition: { type: String, require: true },
  isAvailable: { type: Boolean, require: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  price: { type: Number, require: true },
});

const Car = new mongoose.model("Car", CarSchema);

module.exports = Car;
