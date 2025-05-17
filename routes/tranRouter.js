const express = require("express");
const router = express.Router();
const tranController = require("../controllers/tranController.js");

router.get("/Transaction", tranController.getAllTran);
router.post("/buy", tranController.buyCar);
router.post("/sell", tranController.sellCar);


module.exports = router;
