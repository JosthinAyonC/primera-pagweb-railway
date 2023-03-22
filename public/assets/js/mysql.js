const mysql = require('mysql')

const conection = mysql.createConnection({
    host: 'localhost',
    user:'josthin',
    password: 'Lokoloko21',
    database:'db_firstwebpage'
})


module.exports = conection;