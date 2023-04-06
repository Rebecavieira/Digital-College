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