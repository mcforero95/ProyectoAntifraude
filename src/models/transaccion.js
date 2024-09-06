const mongoose = require('mongoose');

const transaccionSchema = new mongoose.Schema({
  monto: Number,
  fecha: Date,
  hora: String,
  tipo_transaccion: String,
  estado_transaccion: {
    type: String,
    enum: ['completada', 'pendiente_validacion'],
    default: 'completada'
  },
  id_cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente'
  }
});

module.exports = mongoose.model('Transaccion', transaccionSchema);
