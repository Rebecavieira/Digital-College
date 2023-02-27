// function validar() {
//     event.preventDefault(); // faz com que o formulário não seja enviado

//     if (document.getElementById('nome').value === '') { // pega o elemento de id 
//         alert("Nome inválido");
//     }

//     if (document.getElementById('email').value === '') {
//         alert("Email inválido");
//     }

//     if (document.getElementById('telefone').value === '') {
//         alert("Telefone inválido");
//     }

//     if (document.getElementById('cidade').value === '') {
//         alert("Cidade inválida");
//     } 
// }
 
function validar() {
    event.preventDefault(); // faz com que o formulário não seja enviado

    if (nome.value === '') { // pega o elemento de id - nome
        // nome.style.borderColor = 'red'; // deixa a borda vermelha quando não preencher
        nome.classList.add('is-invalid'); // pega a lista de classe do nome e adiciona a classe is invalid - essa classe é do bootstrap
    }

    if (email.value === '') {
        email.classList.add('is-invalid');
    }

    if (telefone.value === '') {
        telefone.classList.add('is-invalid');
    }

    if (cidade.value === '') {
        cidade.classList.add('is-invalid');
    }
}

function alterarNome() {
    nome.classList.remove('is-invalid'); // remove a classe is invalid 

    if (nome.value.length > 1) { // se a quantidade de letras do valor do nome for maior que 1, vai adicionar a classe is-valid
        nome.classList.add('is-valid');

    } else {
        nome.classList.add('is-invalid');
    }
}

function alterarEmail() {
    email.classList.remove('is-invalid');

}

function alterarTelefone() {
    telefone.classList.remove('is-invalid');
}

function alterarCidade() {
    cidade.classList.remove('is-invalid');
}


