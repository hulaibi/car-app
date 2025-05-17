const Transaction = require("../models/Transaction.js");
const Car = require("../models/Car.js");


exports.buyCar = async (req, res) => {
     try {
        const car = await Car.findOne({ _id: req.params.id, status: 'available' });

        if (!car) {
            return res.send("no car available!!");
        }
          const transaction = new Transaction({
          car: car._id,
          buyer: req.user._id,
          date: Date.now,
          price: car.price
        });

        await transaction.save();

     } catch (error) {
        
     }
};