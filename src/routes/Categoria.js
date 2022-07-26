const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const mysqlConnection = require('../database');


//insertar Categoria
router.post('/insert-category', (req, res) =>{
    const {nombre_categoria} = req.body;
    const query = ` CALL INS_CATEGORIA (?, ?, ?, ?, ?, ?, ?, ?); `;

    mysqlConnection.query(query, [nombre_categoria], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Categoria guardado'})
     }else{
        console.log(err);
    }
    });   
});

//Actualizar Categoria
router.put('/update-category', (req, res) =>{
    const {nombre_categoria} = req.body;
    const query = ` CALL UPD_CATEGORIA (?, ?, ?, ?, ?, ?, ?, ?, ? ); `;

    mysqlConnection.query(query, [nombre_categoria], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Categoria Actualizada'})
     }else{
        console.log(err);
    }
    });
});

//Eliminar Categoria
router.delete('/delete-category', (req, res)=>{
    const {nombre_categoria} = req.body;
    const query = ` CALL DELETE_CATEGORIA (?, ?, ?, ?, ?, ?, ?, ?, ? ); `;

    mysqlConnection.query(query, [nombre_categoria], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Categoria Eliminada'})
     }else{
        console.log(err);
    }
    });
});

module.exports = router;