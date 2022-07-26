const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const mysqlConnection = require('../database');


// Mostrar Tabla Reportes
router.get('/showreports', (req, res) =>{
mysqlConnection.query('SELECT * FROM db_amazingshop.reportes', (err, rows, fields)=>{
    if(!err){
        res.json(rows);
    } else{
        console.log(err);
     }
  });
});

// Insertar un nuevo reporte
router.post('/insertreport', (req, res) =>{
    const {Cod_usuario, Nombre,  TipoReporte, Periodo, FechInicial, FechaFinal, Tipo_Formato, Correo, TipoCorreo ,Fecha_Registro, Usr_Registro} = req.body;
    const query = ` CALL INS_REPORTES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);  `;

    mysqlConnection.query(query, [Cod_usuario, Nombre,  TipoReporte, Periodo, FechInicial, FechaFinal, Tipo_Formato, Correo, TipoCorreo ,Fecha_Registro, Usr_Registro], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Reporte guardado'})
     }else{
        console.log(err);
    }
    });
});

//Actualizar reportes
router.put('/updatereport', (req, res) =>{
    const {CodigoReporte, Cod_usuario, Nombre,  TipoReporte, Periodo, FechInicial, FechaFinal, Tipo_Formato, Correo, TipoCorreo ,Fecha_Registro, Usr_Registro} = req.body;
    const query = ` CALL UPT_REPORTES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?); `;

    mysqlConnection.query(query, [CodigoReporte, Cod_usuario, Nombre,  TipoReporte, Periodo, FechInicial, FechaFinal, Tipo_Formato, Correo, TipoCorreo ,Fecha_Registro, Usr_Registro], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Reporte Actualizado'})
     }else{
        console.log(err);
    }
    });
});

//Mostrar el Historial de Reportes
router.get('/showreporthistory', (req, res) =>{
    mysqlConnection.query('CALL SELECT_HISTORIALREPORTES', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        } else{
            console.log(err);
         }
      });
    });

module.exports = router;
