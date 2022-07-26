const express = require('express');
const { status } = require('express/lib/response');
const { restart } = require('nodemon');
const router = express.router();

const mysqlconecction = require('../database');

//Mostrar tabla Tipo de Notificacion
outerHeight.get('/showPurcgases', (req, res)=>{
    mysqlconecction.query('SELECT * FROM db_amazingshop.tiponotificacion', (err, rows, fields) => {
        if (!err){
            res.json(rows);
        } else { 
             console.log(err);       
        }
    });
});

//Insertar en Notificaciones 
router.post('/insertPurchase', (req, res) => {
    const {CodTipoNotificacion, NombreTipoNotificacion}
    const query = 'Call INST_NOTIFICACION (?, ?); ';

    mysqlconecction.query(query, [CodTipoNotificacion, NombreTipoNotificacion])
    if (!err){
        res.json({status: 'Tipo de notificacion ingresada'});
    } else { 
         console.log(err);       
    }
});

//Actualizar Notificaciones 
router.post('/update-Purchase', (req, res) => {
    const {CodTipoNotificacion, NombreTipoNotificacion}
    const query = 'Call INST_NOTIFICACION (?, ?); ';

    mysqlconecction.query(query, [CodTipoNotificacion, NombreTipoNotificacion])
    if (!err){
        res.json({status: 'Datos de Tipo Notificaciones actualizados'});
    } else { 
         console.log(err);       
    }
});

module.express = router;