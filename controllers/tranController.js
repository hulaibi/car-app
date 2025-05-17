const Transaction = require("../models/Transaction.js");
const Car = require("../models/Car.js");



const getAllTran = async (req, res) => {
      try {
        const cars = await Car.find({});

        if (!cars) {
            return res.send("no car available!!");
        }
          const transactionAll = new Transaction({
          car: car.model,
          buyer: req.user.name,
          date: Date.now,
          price: car.price
        });
      } catch (error) {
        console.log(error);
      }
     }
     
        
     
const buyCar = async (req, res) => {
  try {
    const carId = req.body.id;
    const location = req.body.location;
    const price = req.body.location;
    const buyerId = req.body.userId;
    const car = await Car.findById(carId);

    if (!car) {
      return res.send("no car available!!");
    }
    const transaction = new Transaction({
      car: car._id,
      buyer: buyerId, // change it to session later on
      seller: car.owner._id,
      date: Date.now,
      price: price,
      location: location,
    });

    await transaction.save();
  } catch (error) {
    console.log(error.message);
  }
};

 


module.exports = {
  getAllTran,
  buyCar,
};
