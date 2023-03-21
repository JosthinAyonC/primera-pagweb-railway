const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PUERTO;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use( express.static('public') );

app.get('/', (request, response) =>{
    response.render('home', {
        nombre: 'Road trip',
        porquien: 'Josthin Ayon'
    });
});

app.get('/generic', (request, response) =>{
    response.render('generic', {
        nombre: 'Road trip',
        porquien: 'Josthin Ayon'
    });
});

app.get('/elements', (request, response) =>{
    response.render('elements', {
        nombre: 'Road trip',
        porquien: 'Josthin Ayon'
    });
});

app.get('*', (request, response) =>{
    response.render(__dirname+'/views/404');
});

app.listen(port, ()=>{
    console.log(`El puerto elegido para correr la app es http://localhost:${port}`)
});