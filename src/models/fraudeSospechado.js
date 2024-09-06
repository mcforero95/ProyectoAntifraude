const mongoose = require('mongoose');

const fraudeSospechadoSchema = new mongoose.Schema({
  nivel_riesgo: Number,
  motivo_sospecha: String,
  id_transaccion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaccion'
  },
  id_cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente'
  }
});

module.exports = mongoose.model('FraudeSospechado', fraudeSospechadoSchema);
