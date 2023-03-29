const categoriaRouter = require('./resources/categoria/router');
const clienteRouter = require('./resources/cliente/router');
const produtoRouter = require('./resources/produto/router');
const escolaRouter = require('./resources/escola/router');
 
const PORTA = 8000;

const express = require('express');

//niciando uma aplicação com express
const app = express();

app.use(express.json())
//colocando o express para usar o router de categoria, cliente e produto
app.use(categoriaRouter);
app.use(clienteRouter);
app.use(produtoRouter);
app.use(escolaRouter);


app.listen(PORTA, () => {
    console.log('-------------');
    console.log('----TÁ ON----');
    console.log('-------------');
});






