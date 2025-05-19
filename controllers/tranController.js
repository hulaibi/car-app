const Transaction = require("../models/Transaction.js");
const Car = require("../models/Car.js");
const User = require("../models/User.js");

const getAllTran = async (req, res) => {
  try {
    //https://mongoosejs.com/docs/populate.html#population
    const transactions = await Transaction.find()
      .populate("car")
      .populate("buyer", "name")
      .populate("seller", "name");

    if (!transactions || transactions.length === 0) {
      return res.render("transactions/all", { transactions: [] });
    }

    res.render("transactions/all", { transactions });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

const buyCar = async (req, res) => {
  try {
    const carId = req.body.id;
    const location = req.body.location;
    const price = req.body.price;
    const buyerId = req.body.buyer;

    const car = await Car.findById(carId);

    if (!car) {
      return res.send("no car available!!");
    }
    const transaction = await Transaction.create({
      car: car._id,
      buyer: buyerId, // change it to session later on
      seller: car.owner._id,
      date: Date.now(),
      price: price,
      location: location,
    });
    transaction.save();

    const seller = await User.findById(car.owner._id);
    const carIndex = seller.cars.findIndex((car) => car.$oid === car._id.$oid);
    if (carIndex !== -1) {
      seller.cars.splice(carIndex, 1);
    } else {
      return res.send("couldent remove it");
    }
    seller.save();

    const buyer = await User.findById(buyerId); // later session
    buyer.cars.push(car._id);
    buyer.bought.push(transaction._id);

    buyer.save();

    car.owner = buyerId;
    car.save();

    res.send(`${transaction} \n${seller} \n ${buyer}`);
  } catch (error) {
    console.log(error.message);
  }
};

const sellCar = async (req, res) => {
  try {
    const carId = req.body.id;
    const location = req.body.location;
    const sellerId = req.body.seller;

    const car = await Car.findById(carId);

    if (!car) {
      return res.send("no car available!!");
    }
    if (car.isAvailable === true) {
      const transaction = await Transaction.create({
        car: car._id,
        buyer: sellerId, // change it to session later on
        seller: car.owner._id,
        date: Date.now(),
        price: car.price,
        location: location,
      });
      transaction.save();

      const seller = await User.findById(car.owner._id);
      const carIndex = seller.cars.findIndex(
        (car) => car.$oid === car._id.$oid
      );
      if (carIndex !== -1) {
        seller.cars.splice(carIndex, 1);
      } else {
        return res.send("couldent remove it");
      }
      seller.save();

      const buyer = await User.findById(sellerId); // later session
      buyer.cars.push(car._id);
      buyer.sell.push(transaction._id);

      buyer.save();

      car.owner = sellerId;
      car.save();

      res.send(`${transaction} \n${seller} \n ${buyer}`);
    } else {
      return res.send("car not available to sell");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAllTran,
  buyCar,
  sellCar,
};
