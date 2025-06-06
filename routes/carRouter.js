const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController.js");
const Car = require("../models/Car.js");


router.get("/new", (req, res) => {
  res.render("cars/new", { user: req.session.user });
});

router.get("/edit/:id", async (req, res) => {
  let car = await Car.findById(req.params.id);
  if (!car) {
    return res.render("cars/all");
  }
  res.render("cars/edit", { car });
});


router.post("/new", carController.addCar);
router.get("/all", carController.getAllCars);
router.get("/:id", carController.getCarById);
router.post("/update", carController.updateCarById); // dont works with put, becuse of the form only accept get and post

router.post("/delete", carController.deleteCarById); // dont works with delete, becuse of the form only accept get and post


module.exports = router;