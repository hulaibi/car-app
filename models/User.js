const mongoose = require('mongoose')
const Transaction = require('./Transaction')

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    cars: [{type: ObjectId, ref:"Car"}],
    bought:[{type: ObjectId, ref: "Transaction"}],
    sell:[{type: ObjectId, ref: "Transaction"}]
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User
