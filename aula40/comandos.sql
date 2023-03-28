UPDATE tb_aluno SET
    matricula='12345678'
WHERE
    id='8';

DELETE FROM tb_aluno
WHERE matricula='12345678';

----------------------------------------

CREATE TABLE tb_escola (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(100)
);

INSERT INTO tb_escola
    (nome, endereco)
VALUES
    ('Digital College Aldeota', 'Av Santos Dumont, 1510 - Aldeota');


INSERT INTO tb_escola
    (nome, endereco)
VALUES
    ('Digital College Sul', 'Washington Soares, 3663 - Torre 2 - 4º andar - Edson Queiroz');

INSERT INTO tb_escola
    (nome, endereco)
VALUES
    ('EEEP Paulo Petrola', 'Rua Saldaria s/n - Edson Queiroz');

INSERT INTO tb_escola
    (nome, endereco)
VALUES
    ('Manuel da Silva', 'Rua Saldaria s/n - Alvaro Weyne');


UPDATE tb_aluno SET 
    escola_id = '1'
WHERE
    escola_id BETWEEN 20 AND 21;

UPDATE tb_aluno SET 
    escola_id = '2'
WHERE
    escola_id=12 OR escola_id=13 OR escola_id=17;

UPDATE tb_aluno SET 
    escola_id = '3'
WHERE
    escola_id=30 OR escola_id=28 OR escola_id=27;

SELECT 
    tb_aluno.nome as aluno,
    tb_escola.nome as escola
FROM
    tb_aluno INNER JOIN tb_escola
ON
    tb_aluno.escola_id = tb_escola.id
LIMIT 10;