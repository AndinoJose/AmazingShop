const mysql = require('mysql');
const mysqlConnection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_amazingshop'

});

mysqlConnection.connect(function (err){
if(err){
    console.log(err);
    return;
}else{
    console.log('DB is coneccted');
}
})

module.exports = mysqlConnection;