const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: String,
  documento: String,
  estado_cuenta: {
    type: String,
    enum: ['activa', 'bloqueada'],
    default: 'activa'
  },
  // Otros campos relevantes
});

module.exports = mongoose.model('Cliente', clienteSchema);
