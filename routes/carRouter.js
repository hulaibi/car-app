const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController.js");

router.get("/new", (req, res) => {
  res.render("cars/new", { user: req.session.user }); 

});

router.post("/new", carController.addCar);
router.get("/all", carController.getAllCars);
router.get("/:id",carController.getCarById);
router.put("/update", carController.updateCarById);
router.get("/new", carController.newCar);
router.delete("/delete", carController.deleteCarById);

module.exports = router;
