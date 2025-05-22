const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController.js");


router.get("/new", (req, res) => {
  res.render("cars/new", { user: req.session.user }); 

});


router.post("/new", carController.addCar);
router.get("/all", carController.getAllCars);
router.get("/:id", carController.getCarById);
router.post("/update", carController.updateCarById); // dont works with put

// router.get("/new", carController.newCar);
router.post("/delete", carController.deleteCarById); // dont works with put

module.exports = router;
