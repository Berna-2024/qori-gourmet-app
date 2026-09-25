const express = require('express');
const router = express.Router();

const db = require('../db');

// Obtener todos los productos
router.get('/', async (req, res) => {

    try {

        const resultado = await db.query(`
            SELECT
                id_producto,
                nombre,
                precio,
                stock
            FROM productos
            ORDER BY id_producto
        `);

        res.json(resultado.rows);

    } catch (error) {

        console.error('Error al consultar productos:', error);

        res.status(500).json({
            error: 'No se pudieron obtener los productos'
        });
    }

});

module.exports = router;