const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const mysqlConnection = require('../database');



//insertar Productos
router.post('/insert-products', (req, res) =>{
    const {cod_Categoria,cod_Marca,nombre_producto,unidad_producto,precio_producto} = req.body;
    const query = ` CALL INS_PRODUCTOS (?, ?, ?, ?, ?, ?, ?, ?); `;

    mysqlConnection.query(query, [cod_Categoria,cod_Marca,nombre_producto,unidad_producto,precio_producto], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Productos guardado'})
     }else{
        console.log(err);
    }
    });   
});

//Actualizar Productos
router.put('/update-products', (req, res) =>{
    const {cod_Categoria,cod_Marca,nombre_producto,unidad_producto,precio_producto} = req.body;
    const query = ` CALL UPD_PRODUCTOS (?, ?, ?, ?, ?, ?, ?, ?, ? ); `;

    mysqlConnection.query(query, [cod_Categoria,cod_Marca,nombre_producto,unidad_producto,precio_producto], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Productos Actualizado'})
     }else{
        console.log(err);
    }
    });
});


//Eliminar Productos
router.delete('/delete-products', (req, res)=>{
    const {cod_Categoria,cod_Marca,nombre_producto,unidad_producto,precio_producto} = req.body;
    const query = ` CALL DELETE_PRODUCTOS (?, ?, ?, ?, ?, ?, ?, ?, ? ); `;

    mysqlConnection.query(query, [cod_Categoria,cod_Marca,nombre_producto,unidad_producto,precio_producto], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Producto Eliminado'})
     }else{
        console.log(err);
    }
    });
});

module.exports = router;