const express = require("express")
const router = express.Router()
const coinController = require('../controllers/coinController')

router.get('/getAssets', coinController.getAssets)

module.exports = router;

