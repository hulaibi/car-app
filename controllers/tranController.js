const Transaction = require("../models/Transaction.js");
const Car = require("../models/Car.js");
const User = require("../models/User.js");

const getAllTran = async (req, res) => {
  try {
    //https://mongoosejs.com/docs/populate.html#population
    const transactions = await Transaction.find()
      .populate('car')
      .populate('buyer', 'name')
      .populate('seller', 'name');  

    if (!transactions || transactions.length === 0) {
     return res.render('transactions/all', { transactions: [] });
    }

    res.render('transactions/all', { transactions });
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
    seller.cars.pop();
    seller.save();

    const buyer = await User.findById(buyerId); // later session
    buyer.cars.push(car._id);
    buyer.bought.push(transaction._id);

    buyer.save();

    res.send("transaction have been crated");
  } catch (error) {
    console.log(error.message);
  }

};


const sellCar = async (req, res) => {
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
      buyer: car.owner._id, // change it to session later on
      seller: buyerId,
      date: Date.now(),
      price: price,
      location: location,
    });
    transaction.save();

    const seller = await User.findById(car.owner._id);
    seller.cars.pop();
    seller.save();

    const buyer = await User.findById(buyerId); // later session
    buyer.cars.push(car._id);
    buyer.sell.push(transaction._id);

    buyer.save();

    res.send("transaction have been crated");
  } catch (error) {
    console.log(error.message);
  }
  
};

module.exports = {
  getAllTran,
  buyCar,
  sellCar
};
