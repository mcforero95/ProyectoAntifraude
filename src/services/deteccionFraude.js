const Cliente = require('../models/cliente');
const Transaccion = require('../models/transaccion');
const FraudeSospechado = require('../models/fraudeSospechado');

const detectarFraude = async (transaccion) => {
  const cliente = await Cliente.findById(transaccion.id_cliente);
  let esSospechoso = false;
  let motivoSospecha = '';
  let nivelRiesgo = 0;

  // Implementar lógica de detección de fraude
  // Ejemplo simplificado:
  if (transaccion.monto > 10000) {
    esSospechoso = true;
    motivoSospecha = 'Monto inusualmente alto';
    nivelRiesgo = 0.7;
  }

  // Más condiciones de detección...

  if (esSospechoso) {
    await FraudeSospechado.create({
      nivel_riesgo: nivelRiesgo,
      motivo_sospecha: motivoSospecha,
      id_transaccion: transaccion._id,
      id_cliente: cliente._id
    });

    await Cliente.findByIdAndUpdate(cliente._id, { estado_cuenta: 'bloqueada' });
    await Transaccion.findByIdAndUpdate(transaccion._id, { estado_transaccion: 'pendiente_validacion' });
  }

  return esSospechoso;
};

module.exports = { detectarFraude };
