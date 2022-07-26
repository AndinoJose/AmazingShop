const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const mysqlConnection = require('../database');

// Mostrar Tabla Estadisticas
router.get('/show-estatics', (req, res) =>{
    mysqlConnection.query('SELECT * FROM db_amazingshop.estadisticas', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.log(err);
         }
      });
    });

//insertar estadisticas
router.post('/insert-statistics', (req, res) =>{
    const {Cod_usuario, Nombre, FechaInicio, FechaFinal, TipoReporte, IND_Email, Usr_Registro, Tipo_Formato} = req.body;
    const query = ` CALL INS_ESTADISTICAS (?, ?, ?, ?, ?, ?, ?, ?); `;

    mysqlConnection.query(query, [Cod_usuario, Nombre, FechaInicio, FechaFinal, TipoReporte, IND_Email, Usr_Registro, Tipo_Formato], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Etadistica guardado'})
     }else{
        console.log(err);
    }
    });   
});

//Actualizar estadisticaS
router.put('/update-statistics', (req, res) =>{
    const {Cod_Estadistica, Cod_usuario, Nombre, FechaInicio, FechaFinal, TipoReporte, IND_Email, Usr_Registro, Tipo_Formato} = req.body;
    const query = ` CALL UPT_ESTADISTICAS (?, ?, ?, ?, ?, ?, ?, ?, ? ); `;

    mysqlConnection.query(query, [Cod_Estadistica, Cod_usuario, Nombre, FechaInicio, FechaFinal, TipoReporte, IND_Email, Usr_Registro, Tipo_Formato], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Estadistica Actualizada'})
     }else{
        console.log(err);
    }
    });
});

// Mostrar Historial Estadisticas
router.get('/showestaticshistory', (req, res) =>{
    mysqlConnection.query('CALL SELECT_HISTORIAL_ESTADISTICAS', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.log(err);
         }
      });
    });
 
module.exports = router;