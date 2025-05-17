const Transaction = require("../models/Transaction.js");
const Car = require("../models/Car.js");


getAllTran = async (req, res) => {
     try {
        const cars = await Car.find({});

        if (!cars) {
            return res.send("no car available!!");
        }
          const transaction = new Transaction({
          car: car.model,
          buyer: req.user.name,
          date: Date.now,
          price: car.price
        });

        await transaction.save();

     } catch (error) {
        
     }
};

module.exports = {
  getAllTran,
}