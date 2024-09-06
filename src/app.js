const express = require('express');
const connectDB = require('./config/database');
const transaccionRoutes = require('./routes/transaccionRoutes');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/transacciones', transaccionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

module.exports = app;
