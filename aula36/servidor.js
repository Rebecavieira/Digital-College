const produto = require('./controllers/produto');
const categoria = require('./controllers/categoria');
const cliente = require('./controllers/cliente');

// Importando diretamente do NODE
const http = require("http");
const PORTA = 8000;
const ENDERECO = "localhost";

//essa função vai sempre ser executada quando uma requisão foi feita ao servidor
function recepcao(req, res){
    let resposta = "Página não encontrada";

    switch(req.url){
        case "/clientes":
            resposta = cliente.buscar();
        break;
        case "/produtos":
            resposta = produto.buscar();
        break;
        case "/categorias":
            resposta = categoria.buscar();
        break;
    }

    res.end(resposta);
}

//criando  o servidor e colocando ele para escutar as requisições
http.createServer(recepcao).listen(PORTA, ENDERECO, () => {
    console.log('----------------');
    console.log('---A veia tá ON---');
    console.log('----------------');
});



