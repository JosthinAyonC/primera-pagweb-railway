const http = require('http');


http.createServer((request, response) => {
    
    // response.writeHeader('Content-Disposition' , 'attachment; filename=lista.csv' ); Para crear un tipo de documento de windows.
    // response.writeHead(200, { 'Content-Type' : 'application/json' });



    const persona = {
        id: 1,
        nombre: 'Josthin',
        edad: 21
    }

    response.write('JSON.(persona)');
    response.end();

}).listen( 8080 );

console.log('Escuchando el puerto', 8080);
