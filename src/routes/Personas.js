const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

const mysqlConnection = require('../database');


// Mostrar Personas

// Insertar Personas 
router.post('/insertpersona', (req, res) =>{
    const { Cod_Persona, NombreP,  Identidad, edad, fech_nacim, sexo, est_civil} = req.body;
    const query = ` CALL INS_PERSONAS ( ?, ?, ?, ?, ?, ?, ?);`;

    mysqlConnection.query(query, [ Cod_Persona, NombreP,  Identidad, edad, fech_nacim, sexo, est_civil], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Persona guardada'})
     }else{
        console.log(err);
    }
    });
});


//Update persona 

router.put('/updatepersona', (req, res) =>{
    const { Cod_Persona, NombreP,  Identidad, edad, fech_nacim, sexo, est_civil } = req.body;
    const query = ` CALL UPT_PERSONAS ( ?, ?, ?, ?, ?, ?, ?);`;

    mysqlConnection.query(query, [ Cod_Persona, NombreP,  Identidad, edad, fech_nacim, sexo, est_civil], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Persona Actualizada'})
     }else{
        console.log(err);
    }
    });
});

module.exports = router;

//DELETE PERSONAS 

router.post('/deletepersona', (req, res) =>{
    const { Cod_Persona } = req.body;
    const query = ` CALL DELETE_PERSONAS (?);`;

    mysqlConnection.query(query, [ Cod_Persona], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Persona Eliminada'})
     }else{
        console.log(err);
    }
    });
});

// Seleccionar Personas 
router.get('/selectpersona', (req, res) =>{
    const { } = req.body;
    const query = `CALL SELECT_PERSONAS();`;

    mysqlConnection.query(query, (err, rows, fields) => {
     if(!err){
        res.json(rows)
     }else{
        console.log(err);
    }
    });
});


// INSERTAR CORREO
router.post('/insertcorreo', (req, res) =>{
    const { Cod_Persona, email_1, email_2 } = req.body;
    const query = ` CALL INS_CORREO ( ?, ?, ?);`;

    mysqlConnection.query(query, [ Cod_Persona, email_1, email_2], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Datos Actualizados'})
     }else{
        console.log(err);
    }
    });
});


// SELECT CORREO
router.get('/selectcorreo', (req, res) =>{
    const { } = req.body;
    const query = ` CALL SELECT_CORREO ();`;

    mysqlConnection.query(query, (err, rows, fields) => {
     if(!err){
        res.json({rows})
     }else{
        console.log(err);
    }
    });
});

// ACTUALIZAR CORREO
router.put('/updatetcorreo', (req, res) =>{
    const { Cod_email, email_1, email_2 } = req.body;
    const query = ` CALL UPT_CORREO ( ?, ?, ?);`;

    mysqlConnection.query(query, [ Cod_email, email_1, email_2], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Datos Actualizados'})
     }else{
        console.log(err);
    }
    });
});

// ELIMINAR CORREO
router.post('/deletecorreo', (req, res) =>{
    const { Cod_email } = req.body;
    const query = `CALL DELETE_CORREO(?);`;

    mysqlConnection.query(query, [Cod_email], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Datos Correo Borrados'})
     }else{
        console.log(err);
    }
    });
});

// INSERTAR USUARIO
router.post('/insertusuario', (req, res) =>{
    const { Cod_Persona, NOM_USUARIO, Tipo_Usuario, usu_contra, fec_registro, Estado  } = req.body;
    const query = ` CALL INS_USUARIO (?, ?, ?, ?, ?, ?);`;

    mysqlConnection.query(query, [ Cod_Persona, NOM_USUARIO, Tipo_Usuario, usu_contra, fec_registro, Estado], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Datos insertados'})
     }else{
        console.log(err);
    }
    });
});


// SELECCIONAR USUARIO
router.get('/selectusuario', (req, res) =>{
    const {  } = req.body;
    const query = `CALL SELECT_USUARIOS();`;

    mysqlConnection.query(query, (err, rows, fields) => {
     if(!err){
        res.json({rows: rows})
     }else{
        console.log(err);
    }
    });
});

// ACTUALIZAR USUARIO
router.put('/updateusuario', (req, res) =>{
    const { Cod_usuario, NOM_USUARIO, Tipo_Usuario,usu_contra,fec_registro,Estado} = req.body;
    const query = ` CALL UPT_USUARIOS ( ?, ?, ?, ?, ?, ?);`;
    let a= mysqlConnection.query(query, [Cod_usuario, NOM_USUARIO, Tipo_Usuario,usu_contra,fec_registro,Estado], (err, rows, fields) => {
        if(!err){
        res.json({Status: 'Datos Actualizados'})
     }else{
        console.log(err);
    }
    });
});

// ELIMINAR USUARIO
router.post('/deleteusuario', (req, res) =>{
    const { Cod_usuario } = req.body;
    const query = ` CALL DELETE_USUARIO (?);`;

    mysqlConnection.query(query, [Cod_usuario], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Datos Usuario Borrados'})
     }else{
        console.log(err);
    }
    });
});


// INSERTAR DIRECCIONES
router.post('/insertdirec', (req, res) =>{
    const { Cod_Persona, direc_casa, direc_trabajo, direc_envio  } = req.body;
    const query = ` CALL INS_DIRECCION ( ?, ?, ?, ?);`;

    mysqlConnection.query(query, [ Cod_Persona, direc_casa, direc_trabajo, direc_envio], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Datos insertados'})
     }else{
        console.log(err);
    }
    });
});

// SELECCIONAR DIRECCIONES
router.get('/selectdirec', (req, res) =>{
    const {  } = req.body;
    const query = ` CALL SELECT_DIREC();`;

    mysqlConnection.query(query, (err, rows, fields) => {
     if(!err){
        res.json({rows})
     }else{
        console.log(err);
    }
    });
});




// ACTUALIZAR DIRECCIONES
router.put('/updatedirec', (req, res) =>{
    const { Cod_direc, direc_casa, direc_trabajo, direc_envio } = req.body;
    const query = `CALL UPT_DIREC( ?, ?, ?, ?);`;

    mysqlConnection.query(query, [ Cod_direc, direc_casa, direc_trabajo, direc_envio], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Datos Actualizados'})
     }else{
        console.log(err);
    }
    });
});


// ELIMINAR DIRECCIONES
router.post('/deletedirec', (req, res) =>{
    const { Cod_direc, direc_casa, direc_trabajo, direc_envio } = req.body;
    const query = ` CALL DELETE_DIREC ( ?, ?, ?, ?);`;

    mysqlConnection.query(query, [ Cod_direc, direc_casa, direc_trabajo, direc_envio], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Datos Borrados'})
     }else{
        console.log(err);
    }
    });
});


// INSERTAR TELEFONO

router.post('/insertTELEF', (req, res) =>{
    const { Cod_Persona, Tel_casa, Tel_movil  } = req.body;
    const query = ` CALL INS_TELEFONO ( ?, ?, ?);`;

    mysqlConnection.query(query, [ Cod_Persona, Tel_casa, Tel_movil], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Datos insertados'})
     }else{
        console.log(err);
    }
    });
});

// SELECCIONAR TELEFONO
router.get('/selecttelef', (req, res) =>{
    const { } = req.body;
    const query = ` CALL SELECT_TELEFONO ();`;

    mysqlConnection.query(query, (err, rows, fields) => {
     if(!err){
        res.json({rows})
     }else{
        console.log(err);
    }

    });
});


//ACTUALIZAR TELEFONO
router.post('/updateTelef', (req, res) =>{
    const { Cod_Tel, Tel_casa, Tel_movil } = req.body;
    const query = ` CALL UPT_TELEFONO ( ?, ?, ?);`;
    mysqlConnection.query(query, [ Cod_Tel, Tel_casa, Tel_movil], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Datos Actualizados'})
     }else{
        console.log(err);
    }
    });
});

//ELIMINAR TELEFONO
router.post('/deleteTELEF', (req, res) =>{
    const { Cod_Persona } = req.body;
    const query = ` CALL DELETE_TELEFONO (?);`;

    mysqlConnection.query(query, [ Cod_Persona], (err, rows, fields) => {
     if(!err){
        res.json({Status: 'Datos Telefono Borrados'})
     }else{
        console.log(err);
    }
    });
});

module.exports = router;