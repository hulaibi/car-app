const mongoose = require('mongoose')
const Transaction = require('./Transaction')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    cars: [{type: mongoose.Schema.Types.ObjectId, ref:"Car"}],
    bought:[{type: mongoose.Schema.Types.ObjectId, ref: "Transaction"}],
    sell:[{type: mongoose.Schema.Types.ObjectId, ref: "Transaction"}]
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User
