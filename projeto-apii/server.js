const express = require('express');
const categoryRoutes = require("./resources/category/routes");
const bannerRoutes = require("./resources/banner/routes");
const produtoRoutes = require("./resources/produto/routes");
const pedidoRoutes = require("./resources/pedido/routes");
const usersRoutes = require("./resources/users/routes");
const cors = require('cors');
const swagger = require("swagger-ui-express");
const docs = require('./docs.json')

const app = express();

// criando rota da documentação
app.use('/documentacao', swagger.serve, swagger.setup(docs));

app.use(cors());
app.use(express.json());
app.use(categoryRoutes);
app.use(bannerRoutes);
app.use(produtoRoutes);
app.use(pedidoRoutes);
app.use(usersRoutes);


app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
}); 
 