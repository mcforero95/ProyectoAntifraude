const Transaccion = require('../models/transaccion');
const { detectarFraude } = require('../services/deteccionFraude');

const procesarTransaccion = async (req, res) => {
  try {
    const nuevaTransaccion = new Transaccion(req.body);
    await nuevaTransaccion.save();

    const esSospechosa = await detectarFraude(nuevaTransaccion);

    if (esSospechosa) {
      res.status(200).json({ mensaje: 'Transacción marcada como sospechosa, cuenta bloqueada' });
    } else {
      res.status(200).json({ mensaje: 'Transacción procesada con éxito' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar la transacción' });
  }
};

module.exports = { procesarTransaccion };
