CREATE TABLE tb_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT (50),
    id_produto INT (50),
    status_pedido VARCHAR (255),
    numero_pedido INT (50)
);
