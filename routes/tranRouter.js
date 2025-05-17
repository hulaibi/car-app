const express = require("express");
const router = express.Router();
const tranController = require("../controllers/tranController.js");

router.get("/", tranController.buyCar);

module.exports = router;