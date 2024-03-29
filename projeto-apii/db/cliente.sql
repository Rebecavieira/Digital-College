CREATE TABLE tb_clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL
);

INSERT INTO tb_clientes (nome) VALUES ('Maria');

CREATE TABLE tb_enderecos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    endereco VARCHAR (100) NOT NULL,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES tb_clientes(id)
);

INSERT INTO tb_enderecos (endereco, cliente_id) VALUES ('Rua da barca 123', 1);
INSERT INTO tb_enderecos (endereco, cliente_id) VALUES ('Rua da velha 123', 2);


SELECT tb_clientes.id, tb_clientes.nome, tb_enderecos.endereco FROM 
tb_clientes INNER JOIN tb_enderecos 
ON tb_enderecos.cliente_id = tb_clientes.id;

SELECT DISTINCT
    tb_clientes.id, tb_clientes.nome, tb_enderecos.endereco
FROM 
    tb_clientes INNER JOIN tb_enderecos
ON 
    tb_enderecos.cliente_id = tb_clientes.id
GROUP BY tb_clientes.id;

