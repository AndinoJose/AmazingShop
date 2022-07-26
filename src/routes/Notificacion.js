const express = require('express');
const { status } = require('express/lib/response');
const { restart } = require('nodemon');
const router = express.router();

const mysqlconecction = require('../database');

//Mostrar tabla Notificacion
outerHeight.get('/showPurcgases', (req, res)=>{
    mysqlconecction.query('SELECT * FROM db_amazingshop.notificacion', (err, rows, fields) => {
        if (!err){
            res.json(rows);
        } else { 
             console.log(err);       
        }
    });
});

//Insertar en Notificaciones 
router.post('/insertPurchase', (req, res) => {
    const {CodNotificacion, CodTipoNotificacion, Cod_email, Cod_telef, Cod_usuario, Asunto, Mensaje, Fecha, NomUsuario, CodContacto}
    const query = 'Call INST_NOTIFICACION (?, ?, ?, ?, ?, ?, ?, ?, ?, ?); ';

    mysqlconecction.query(query, [CodNotificacion, CodTipoNotificacion, Cod_email, Cod_telef, Cod_usuario, Asunto, Mensaje, Fecha, NomUsuario, CodContacto])
    if (!err){
        res.json({status: 'Notificacion ingresada'});
    } else { 
         console.log(err);       
    }
});


//Actualizar Notificaciones 
router.post('/update-Purchase', (req, res) => {
    const {CodNotificacion, CodTipoNotificacion, Cod_email, Cod_telef, Cod_usuario, Asunto, Mensaje, Fecha, NomUsuario, CodContacto}
    const query = 'Call INST_NOTIFICACION (?, ?, ?, ?, ?, ?, ?, ?, ?, ?); ';

    mysqlconecction.query(query, [CodNotificacion, CodTipoNotificacion, Cod_email, Cod_telef, Cod_usuario, Asunto, Mensaje, Fecha, NomUsuario, CodContacto])
    if (!err){
        res.json({status: 'Datos de Notificaciones actualizados'});
    } else { 
         console.log(err);       
    }
});

module.express = router;