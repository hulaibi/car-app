const Transaction = require("../models/Transaction.js");
const Car = require("../models/Car.js");

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

module.export = {
  buyCar,
};
