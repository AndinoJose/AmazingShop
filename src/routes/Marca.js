const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const mysqlConnection = require('../database');


//insertar Marca
router.post('/insert-brand', (req, res) =>{
    const {nombre_marca} = req.body;
    const query = ` CALL INS_MARCA (?, ?, ?, ?, ?, ?, ?, ?); `;

    mysqlConnection.query(query, [nombre_marca], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Marca guardado'})
     }else{
        console.log(err);
    }
    });   
});

//Actualizar Marca
router.put('/update-brand', (req, res) =>{
    const {nombre_marca} = req.body;
    const query = ` CALL UPD_MARCA(?, ?, ?, ?, ?, ?, ?, ?, ? ); `;

    mysqlConnection.query(query, [nombre_marca], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Marca Actualizada'})
     }else{
        console.log(err);
    }
    });
});


//Eliminar Marca
router.delete('/delete-brand', (req, res)=>{
    const {nombre_marca} = req.body;
    const query = ` CALL DELETE_MARCA (?, ?, ?, ?, ?, ?, ?, ?, ? ); `;

    mysqlConnection.query(query, [nombre_categoria], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Categoria Eliminada'})
     }else{
        console.log(err);
    }
    });
});

 
module.exports = router;
