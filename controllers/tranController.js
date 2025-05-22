const Transaction = require("../models/Transaction.js");
const Car = require("../models/Car.js");
const User = require("../models/User.js");

const getAllTran = async (req, res) => {
  try {
    //https://mongoosejs.com/docs/populate.html#population

    const DBuser = await User.findById(req.params.id)
      .populate("cars")
      .populate("bought")
      .populate("sell");

    const transactions = await Transaction.find()
      .populate("car")
      .populate("buyer", "name")
      .populate("seller", "name");
    console.log("transactions" + transactions);
    console.log("user" + DBuser);

    if (!transactions || transactions.length === 0) {
      return res.render("transactions/all", { transactions: [] });
    }

    res.render("transactions/all", { transactions, DBuser });
  } catch (error) {
    console.log(error);
    console.error(
      "An error has occurred finding a transaction!",
      error.message
    );
  }
};

const buyCar = async (req, res) => {
  try {
    const carId = req.body.id;

    const car = await Car.findById(carId);
    const location = req.body.location;
    const price = req.body.price;
    const buyerId = req.body.buyer;

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
    console.log(car.owner._id);
    console.log(buyerId);

    const seller = await User.findById(car.owner._id);
    const carIndex = seller.cars.findIndex((car) => car.$oid === car._id.$oid);
    seller.sell.push(transaction._id);
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

    res.redirect("../cars/all");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAllTran,
  buyCar,
};
