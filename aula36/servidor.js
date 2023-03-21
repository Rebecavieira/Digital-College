const produto = require('./produto');
const categoria = require('./categoria');
const cliente = require('./cliente');

// Importando diretamente do NODE
const http = require("http");
const PORTA = 8000;
const ENDERECO = "localhost";

//essa função vai sempre ser executada quando uma requisão foi feita ao servidor
function recepcao(req, res){
    let resposta = "Página não encontrada";

    if (req.url === "/clientes") {
        resposta = cliente.buscar();
    } else if (req.url === '/produtos'){
        resposta = produto.buscar();
    }
    
    res.end(resposta);
}

//criando  o servidor e colocando ele para escutar as requisições
http.createServer(recepcao).listen(PORTA, ENDERECO, () => {
    console.log('----------------');
    console.log('---A veia tá ON---');
    console.log('----------------');
});



