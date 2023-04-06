const app = require('express').Router();
const database = require('../../connection/database');
const argon2 = require('argon2');

app.get('/users', async (req, res) => {

    let lista = await database.execute(`SELECT * FROM tb_users`);

    res.send(JSON.stringify(lista));
});

app.post("/users", async (req, res) => {
    let senhaCriptografada = await argon2.hash(req.body.senha);

    let response = await database.execute(`
        INSERT INTO tb_users (nome, senha, email) VALUES ('${req.body.nome}', '${senhaCriptografada}', '${req.body.email}');
    `);

    await database.execute(`
        UPDATE tb_users SET token = '${req.body.senha}_${response.insertId}' WHERE id=${response.insertId};
    `);

    let dados = req.body;

    dados.id = response.insertId;

    res.send(dados);
});

app.get("/users/auth", async (req, res) => {


    let users = await database.execute(`
        SELECT * FROM tb_users WHERE email = '${req.headers.email}';
    `);

    // se não for encontrado ninguém com o email, então o usuário não existe
    if (!users[0]){
        res.status(400).send({erro: 'Email inválido'});
        return;
    }

    let senhaVerificada = await argon2.verify(users[0].senha, req.headers.senha);

    if (false === senhaVerificada){
        res.status(400).send({erro: 'Senha Incorreta'});
    }

    res.send(users[0]);
});

module.exports = app; 