const express = require("express");
const router = express.Router();
const tranController = require("../controllers/tranController.js");
const Car = require("../models/Car.js");
const User = require("../models/User.js");

router.get("/buy/:id", async (req, res) => {
  let car = await Car.findById(req.params.id);
  let user = await User.findById(req.session.user._id);

  res.render("transactions/buy", { car, user });
});

router.post("/buy", tranController.buyCar);
router.get("/all", tranController.getAllTran);

module.exports = router;
