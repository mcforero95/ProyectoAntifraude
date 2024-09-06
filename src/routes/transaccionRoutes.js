const express = require('express');
const router = express.Router();
const { procesarTransaccion } = require('../controllers/transaccionController');

router.post('/procesar', procesarTransaccion);

module.exports = router;
