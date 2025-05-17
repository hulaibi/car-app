const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController.js");

router.post("/addcar", carController.addCar);
router.get("/", carController.getAllCars);
router.put("/", carController.updateCarById);
router.delete("/", carController.deleteCarById);

module.exports = router;