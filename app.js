require('dotenv').config();

const express = require('express');
const path = require('path');

const productosRoutes = require('./routes/productos');

const app = express();

const PORT = process.env.APP_PORT || 3000;

// Permite recibir JSON
app.use(express.json());

// Permite mostrar los archivos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para comprobar que Express funciona
app.get('/health', (req, res) => {
    res.json({
        estado: 'OK',
        mensaje: 'Servidor Qori Gourmet funcionando'
    });
});

// Rutas relacionadas con productos
app.use('/productos', productosRoutes);

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});