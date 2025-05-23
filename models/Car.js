const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  condition: { type: String, required: true },
  isAvailable: { type: Boolean, required: true },
  owner: {type: mongoose.Schema.ObjectId, ref: "User" },
  price:{type: Number, required : true},
  imageUrl: { type: String }
});

const Car = new mongoose.model("Car", CarSchema);

module.exports = Car;
