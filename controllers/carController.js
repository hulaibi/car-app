const Car = require("../models/Car.js");
const User = require("../models/User.js");

const addCar = async (req, res) => {
  try {
    const newModel = req.body.model;
    const newYear = req.body.year;
    const newCondition = req.body.condition;
    const newIsAvailable = req.body.isAvailable;
    const newOwner = req.body.name;
    const newPrice = req.body.price;

    const user = await User.findOne({
      name: newOwner,
    });
    if (!user) {
      return res.send("cant find owner");
    }
    const car = await Car.create({
      model: newModel,
      year: newYear,
      condition: newCondition,
      isAvailable: newIsAvailable,
      price: newPrice,
      owner: user._id,
    });
    user.cars.push(car._id);

    user.save();

    res.send(`done adding car to the user ${user.name}`);
  } catch (error) {
    console.log(error.message);
  }
};

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({}).populate("owner");
    
    if (!cars) {
      return res.send("there is no cars");
    }

    res.render("cars/all", {cars});
  } catch (error) {
    console.log(error.message);
  }
};

const getCarById = async (req, res) => {
  try {
    const carByID = await Car.findById(req.params.id).populate("owner");
    if (!carByID) {
      return res.send("car did not found");
    }
    res.send(carByID);
  } catch (error) {
    console.log(error.message);
  }
};

const updateCarById = async (req, res) => {
  try {
    const newModel = req.body.model;
    const newYear = req.body.year;
    const newCondition = req.body.condition;
    const newIsAvailable = req.body.isAvailable;

    const newPrice = req.body.price;
    const updatedCar = await Car.findByIdAndUpdate(
      req.body.id,
      {
        model: newModel,
        year: newYear,
        condition: newCondition,
        isAvailable: newIsAvailable,
        price: newPrice,
      },
      { new: true }
    );

    if (!updatedCar) {
      return res.send("error in updating car");
    }

    res.send(updatedCar);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteCarById = async (req, res) => {
  try {
    const carId = req.body.id;

    const allUsers = await User.find({});
    allUsers.forEach((doc) => {
      if (doc.cars.includes(carId)) {
        const carIndex = doc.cars.indexOf(carId);
        doc.cars.splice(carIndex, 1);
        doc.save();
      }
    });

    const deleteCar = await Car.findByIdAndDelete(carId);
    if (!deleteCar) {
      return res.send("car couldn't be deleted");
    }
    res.send("have been deleted");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addCar,
  getAllCars,
  getCarById,
  updateCarById,
  deleteCarById,
};
