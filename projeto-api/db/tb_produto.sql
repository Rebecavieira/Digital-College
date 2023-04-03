CREATE TABLE tb_produto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_modelo VARCHAR (50) NOT NULL,
    descricao VARCHAR (255),
    desconto INT (255),
    tipo VARCHAR (50),
    genero VARCHAR (50),
    valor_original INT (50),
    valor_desconto INT (50),
    avaliacao VARCHAR (50),
    referencia  VARCHAR (50),
    tamanho INT (50),
    cor VARCHAR (50),
    quantidade INT (50),
    id_marca INT (50),
    id_categoria INT (50),
    estado VARCHAR (50),
    imagem VARCHAR (255)
);

INSERT INTO tb_produto (nome_modelo) 
VALUES ("tenis");

SELECT * FROM tb_produto; 