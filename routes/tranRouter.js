const express = require("express");
const router = express.Router();
const tranController = require("../controllers/tranController.js");

router.post("/buy", tranController.buyCar);
router.post("/sell", tranController.sellCar);
router.get("/all", tranController.getAllTran);



module.exports = router;
