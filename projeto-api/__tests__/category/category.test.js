const controller = require('../../resources/category/controller');
const routes = require('../../resources/category/routes')

test('Testando o endpoint buscar todos', async () => {
    let resultado = await controller.listAll();
    expect(typeof JSON.parse(resultado)).toBe('object');

})

test('Testando controller listarUm', async () => {
    let resultado = JSON.parse(await controller.listOne(1));
    expect(typeof resultado).toBe('object');
    expect(typeof resultado.id).toBe('number');
    expect(typeof resultado.nome).toBe('string');
    expect(typeof resultado.status).toBe('number');
    expect(typeof resultado.created_at).toBe('string');
})

// test('testando a rota listarUm', async () => {
//     let resultado = JSON.stringify(await routes.listOne('a'));
//     expect(resultado).toBe("Unknow column 'a' in 'where clause'")
// })

test('Testando se está inserindo na tabela', async () => {
    let dados = {
        nome: 'teste',
        status: 1,
    }
    let resultado = JSON.parse(await controller.create(JSON.stringify(dados)));
    expect(typeof resultado).toBe('object');
    expect(typeof resultado.id).toBe('number');
})