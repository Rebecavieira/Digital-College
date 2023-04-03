const express = require('express');
const categoryRoutes = require("./resources/category/routes");
const bannerRoutes = require("./resources/banner/routes");
const produtoRoutes = require("./resources/produto/routes");
const pedidoRoutes = require("./resources/pedido/routes");

const app = express();

app.use(express.json());
app.use(categoryRoutes);
app.use(bannerRoutes);
app.use(produtoRoutes);
app.use(pedidoRoutes);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
});
 