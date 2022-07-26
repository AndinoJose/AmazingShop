const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const mysqlConnection = require('../database');

//Mostrar Tabla Compras
router.get('/showPurchases', (req, res) => {
    mysqlConnection.query('SELECT * FROM db_amazingshop.compras', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// Insertar en Compras
router.post('/insertPurchase', (req, res) => {
    const { COD_COMPRA, Cod_usuario, cod_Inventario, DESC_PRODUCTO, CANTIDAD, PRECIO, FECHA_COMPRA, NOMBRE_PROVEE} = req.body;
    const query = ` CALL INS_COMPRAS (?, ?, ?, ?, ?, ?, ?, ?);  `;

    mysqlConnection.query(query, [COD_COMPRA, Cod_usuario, cod_Inventario, DESC_PRODUCTO, CANTIDAD, PRECIO, FECHA_COMPRA, NOMBRE_PROVEE], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Compra Realizada' })
        } else {
            console.log(err);
        }
    });
});

//Actualizar Compras
router.put('/update-purchases', (req, res) => {
    const { COD_COMPRA, Cod_usuario, cod_Inventario, DESC_PRODUCTO, CANTIDAD, PRECIO, FECHA_COMPRA, NOMBRE_PROVEE } = req.body;
    const query = ` CALL INS_COMPRAS (?, ?, ?, ?, ?, ?, ?, ?);  `;

    mysqlConnection.query(query, [COD_COMPRA, Cod_usuario, cod_Inventario, DESC_PRODUCTO, CANTIDAD, PRECIO, FECHA_COMPRA, NOMBRE_PROVEE], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'Datos de Compra actualizados' })
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
