require('dotenv').config(); // Añade esta línea al principio del archivo
console.log('Todas las variables de entorno:', process.env);
const mongoose = require('mongoose');
const Cliente = require('../models/cliente');
const Transaccion = require('../models/transaccion');
const { detectarFraude } = require('../services/deteccionFraude');

const testDatabase = async () => {
  try {
    // Verifica que la URI se está cargando correctamente
    console.log('URI de MongoDB:', process.env.MONGODB_URI);
    
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false, // Añade esta línea
      useCreateIndex: true // Añade esta línea si estás usando índices
    });

    // Crear un cliente de prueba
    const cliente = await Cliente.create({
      nombre: 'Juan Pérez',
      documento: '12345678'
    });

    // Crear una transacción sospechosa
    const transaccion = await Transaccion.create({
      monto: 15000,
      fecha: new Date(),
      hora: '14:30',
      tipo_transaccion: 'transferencia',
      id_cliente: cliente._id
    });

    // Detectar fraude
    await detectarFraude(transaccion);

    // Verificar resultados
    const clienteActualizado = await Cliente.findById(cliente._id);
    const transaccionActualizada = await Transaccion.findById(transaccion._id);

    console.log('Estado de la cuenta:', clienteActualizado.estado_cuenta);
    console.log('Estado de la transacción:', transaccionActualizada.estado_transaccion);

  } catch (error) {
    console.error('Error en la prueba:', error);
  } finally {
    await mongoose.disconnect();
  }
};

testDatabase();
