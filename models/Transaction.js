const mongoose = require("mongoose");

const tranSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.ObjectId, required: true, ref: "Car" },
  buyer: { type: mongoose.Schema.ObjectId, required: true, ref: "User" },
  seller: { type: mongoose.Schema.ObjectId, required: true, ref: "User" },
  date: { type: Date, default: Date.now },
  price: { type: Number, required: true },
  location: { type: String, require: true },
});

const Transaction = mongoose.model("Transaction", tranSchema);

module.exports = Transaction;
