const express = require('express');
const contacto = require ("./public/assets/js/contacto.js")
const app = express();

const hbs = require('hbs');
const conection = require('./public/assets/js/mysql.js');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', (req, res) => {

    res.render('home');
});
app.get('/about-me', (req, res) => {

    res.render('about-me');
});

app.get('/elements', (req, res) => {

    res.render('elements');
});

app.get('/retroalimentacion', (req, res) => {

    res.render('retroalimentacion');
});


conection.connect((err)=>{
    if(err) throw err

    console.log('Conexion establecida');
    app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
    });
    
});


