const Car = require("../models/Car.js");
const User = require("../models/User.js");

const addCar = async (req, res) => {
  try {
    const newModel = req.body.model;
    const newYear = req.body.year;
    const newCondition = req.body.condition;
    const newIsAvailable = req.body.isAvailable;
    const newOwner = req.body.owner;

    const user = await User.findOne({
      name: newOwner,
    });
    const car = await Car.create({
      model: newModel,
      year: newYear,
      condition: newCondition,
      isAvailable: newIsAvailable,
      owner: newOwner,
    });
    user.Car.push(car._id);

    user.save();

    console.log(`done adding car to the user ${user.name}`);
  } catch (error) {
    console.log(error.message);
  }
};

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({});

    console.log(cars);
  } catch (error) {
    console.log(error.message);
  }
};

const getCarById = async (req, res) => {
  try {
    const carByID = await Car.findById(req.params.id);
    console.log(carByID);
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
    const newOwner = req.body.owner;
    const updatedCar = await Car.findByIdAndUpdate(
      req.body.id,
      {
        model: newModel,
        year: newYear,
        condition: newCondition,
        isAvailable: newIsAvailable,
        owner: newOwner,
      },
      { new: true }
    );

    console.log(updatedCar);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteCarById = async (req, res) => {
  try {
    const deleteCar = await Car.findByIdAndDelete(req.body.id);
    console.log("have be deleted");
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
