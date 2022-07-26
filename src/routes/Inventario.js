const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const mysqlConnection = require('../database');



//insertar Inventario
router.post('/insert-inventory', (req, res) =>{
    const {cod_Productos,nombre_producto,existencia_inicial,entrada_producto,salida_productp,total_existencia} = req.body;
    const query = ` CALL INS_INVENTARIO(?, ?, ?, ?, ?, ?, ?, ?); `;

    mysqlConnection.query(query, [cod_Productos,nombre_producto,existencia_inicial,entrada_producto,salida_productp,total_existencia], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Inventario guardado'})
     }else{
        console.log(err);
    }
    });   
});

//Actualizar Inventario
router.put('/update-inventory', (req, res) =>{
    const {cod_Productos,nombre_producto,existencia_inicial,entrada_producto,salida_productp,total_existencia} = req.body;
    const query = ` CALL UPD_INVENTARIO (?, ?, ?, ?, ?, ?, ?, ?, ? ); `;

    mysqlConnection.query(query, [cod_Productos,nombre_producto,existencia_inicial,entrada_producto,salida_productp,total_existencia], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Inventario Actualizado'})
     }else{
        console.log(err);
    }
    });
});


 
//Eliminar Productos
router.delete('/delete-inventory', (req, res)=>{
    const {cod_Productos,nombre_producto,existencia_inicial,entrada_producto,salida_productp,total_existencia} = req.body;
    const query = ` CALL DELETE_INVENTARIO (?, ?, ?, ?, ?, ?, ?, ?, ? ); `;

    mysqlConnection.query(query, [cod_Productos,nombre_producto,existencia_inicial,entrada_producto,salida_productp,total_existencia], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'INVENTARIO Eliminado'})
     }else{
        console.log(err);
    }
    });
});

module.exports = router;