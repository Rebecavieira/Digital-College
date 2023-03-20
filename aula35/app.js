const http = require("http");
const host = "localhost";
const port = "8000";


const userController = require("./users");

const server = http.createServer((req, res) => {
    if(){
        
    }
    res.end("Hello World")
})

server.listen(port, host, () => {
    console.log(`Servidor de pé no link: http://${host}:${port}`);
})
console.log(userController.createUser());