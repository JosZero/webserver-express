const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public'));


//express HBS engine

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', function (req, res) {

    
    res.render('home',{
        nombre: 'jose'
        
    });
})

app.get('/about', function (req, res) {

    res.render('about');
})

app.get('/data', function (req, res) {

    res.send('Hello data');
    
})
app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});