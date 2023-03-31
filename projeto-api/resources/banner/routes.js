// const express = require("express");
// const app = express.Router();

const app = require('express').Router();

app.get('/banners', async (req, res) => {
    res.send('ok');
});
 
app.get('/banners/:id', async (req, res) => {
    res.send('ok');
});

app.post('/banners', async (req, res) => {
    res.send('ok');
});

app.put('/banners/:id', async (req, res) => {
    res.send('ok');
});

app.delete('/banners/:id', async (req, res) => {
    res.send('ok');
});


module.exports = app;