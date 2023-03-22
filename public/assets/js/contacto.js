//Capturar los datos del formulario.

function capturar() {

    let name = document.getElementById("nameF").value;
    let mail = document.getElementById("emailF").value;
    let message = document.getElementById("messageF").value;

    if (name == "" || message == "") {

        var campo_vacio = '';
        if (name == '') {
            campo_vacio = "Name";
            document.getElementById('nameF').focus();
        } else if (message == '') {
            campo_vacio = 'Message';
            document.getElementById('messageF').focus();
        }
        alert('El campo "' + campo_vacio + '" es obligatorio completarlo.');
    }
    else {

        const sql = `INSERT INTO personas (name, email, message) VALUES (${name},${mail},${message} )`;
        const values = [name, mail, message];

        mysql.query(sql, values, function (err, result) {
            if (err) throw err;
            console.log(`Se han insertado ${result.affectedRows} registros en la base de datos`);
        });

        alert('Gracias por tu mensaje, sera tomado en cuenta para el proximo update');

        document.getElementById("nameF").value = "";
        document.getElementById("emailF").value = "";
        document.getElementById("messageF").value = "";
    }
}
// function insertar(name, email, message) {

//     const sql = `INSERT INTO personas (name, email, message) VALUES (${name},${email},${message} )`;
//     const values = [name, email, message];

//     mysql.query(sql, values, function (err, result) {
//         if (err) throw err;
//         console.log(`Se han insertado ${result.affectedRows} registros en la base de datos`);
//     });
// }

module.exports =  capturar;