const tabuada = require('../src/tabuada');

// console.log(
//     tabuada.somar(10,20)
// )
 
test('testando se a função de somar está somando da forma correta', () => {
    expect(tabuada.somar(10, 20)).toBe(30);
});

test('testando se a função soma numeros negativos', () => {
    expect(tabuada.somar(10, -10)).toBe(0);
});

// outra forma de fazer o de cima
// test('testando se a função soma numeros negativos', () => {
//     let resultado = tabuada.somar(-10, 10);

//     expect(resultado).toBe(0);
// });
test('garante que a funcao somar consegue lidar com numeros reais', () => {
    let resultado = tabuada.somar(2.3, 2.4);

     expect(resultado).toBe(4.7);
});

test('garante que a funcao somar consegue lidar com numeros reais', () => {
    let resultado = tabuada.somar(8.355, 10.6789);

     expect(resultado).toBe(19.0339);
});

test('garante que a funcao subtrair esta funcionando com numeros  normais', () => {
    let resultado = tabuada.subtrair(5, 3);

     expect(resultado).toBe(2);
});

test('garante que a funcao subtrair esta funcionando com numeros  quebrados', () => {
    let resultado = tabuada.subtrair(6.9, 4.2);

     expect(resultado).toBe(2.7);
});

test('garante que a funcao divisao esta funcionando', () => {
    let resultado = tabuada.dividir(4, 2);

     expect(resultado).toBe(2);
});

test('garante que a funcao divisao por zero esta funcionando', () => {
    let resultado = tabuada.dividir(4, 0);

     expect(resultado).toBe("n2 não pode ser 0");
});

test('garante que a funcao de multiplicacao esta funcionando', () => {
    let resultado = tabuada.multiplicar(3, 5);

     expect(resultado).toBe(15);
});

test('garante que a funcao de multiplicacao por zero esta funcionando', () => {
    let resultado = tabuada.multiplicar(3, 0);

     expect(resultado).toBe(0);
});

test('garante que a funcao de multiplicacao por numero quebrado esta funcionando', () => {
    let resultado = tabuada.multiplicar(3.5, 3.5);

     expect(resultado).toBe(12.25);
});

