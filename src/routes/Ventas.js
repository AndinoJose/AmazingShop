const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const mysqlConnection = require('../database');

//Mostrar tabla de Ventas
router.get('/showSales', (req, res) => {
    mysqlConnection.query('SELECT * FROM db_amazingshop.ventas', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// Insertar en Ventas
router.post('/insertSale', (req, res) => {
    const { COD_VENTAS, cod_Productos, NOMBRE_CLIENTE, DESC_PRODUCTO, CANTIDAD, PRECIO, FECHA_VENTA} = req.body;
    const query = ` CALL INS_VENTAS (?, ?, ?, ?, ?, ?, ?);  `;

    mysqlConnection.query(query, [COD_VENTAS, cod_Productos, NOMBRE_CLIENTE, DESC_PRODUCTO, CANTIDAD, PRECIO, FECHA_VENTA], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Venta realizada con exito' })
        } else {
            console.log(err);
        }
    });
});

//Actualizar Ventas
router.put('/update-sales', (req, res) => {
    const { COD_VENTAS, cod_Productos, NOMBRE_CLIENTE, DESC_PRODUCTO, CANTIDAD, PRECIO, FECHA_VENTA } = req.body;
    const query = ` CALL INS_VENTAS (?, ?, ?, ?, ?, ?, ?);  `;

    mysqlConnection.query(query, [COD_VENTAS, cod_Productos, NOMBRE_CLIENTE, DESC_PRODUCTO, CANTIDAD, PRECIO, FECHA_VENTA], (err, rows, fields) => {
        if(!err) {
            res.json({ Status: 'Datos de Venta actualizados' })
        } else {
            console.log(err);
        }
    });
});

module.exports = router;