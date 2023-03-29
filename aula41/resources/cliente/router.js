const express = require('express');
const cliente = require('./cliente');

//criando um router para gerenciar os endpoints de cliente
const app = express.Router();

app.get('/clientes', (req, res) => {
    res.send(cliente.buscar());
});

app.post('/clientes', (req, res) => {
    res.send(cliente.cadastrar());
});

//exportando todas as rotas criadas aqui
module.exports = app;