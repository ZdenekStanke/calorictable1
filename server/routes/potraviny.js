const express = require('express');
const router = express.Router();

const potravinyController = require("../controllers/potraviny");

router.get('/', potravinyController.getAllPotraviny);

router.get('/:id', potravinyController.getPotravinyById);

module.exports = router;
