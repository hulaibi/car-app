const mongoose = require("mongoose");

const tranSchema = new mongoose.Schema({
 
  car: {type: String, required : true},
  buyer: {type: String, required : true},
  seller: {type: String, required : true},
  date: {type: String, required : true},
  price:{type: String, required : true},

});

const Transaction = mongoose.model("Transactionv", tranSchema );

module.exports = Transaction;