const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

router.get('/:id', userController.getUserById)
router.get("/:id", userController.getUserPro);

module.exports = router
