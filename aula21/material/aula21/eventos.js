let contatos = [
    {
        nome: "Rebeca",
        telefone: "85 98877-5555"
    },
    {
        nome: "Mariah",
        telefone: "85 98877-5555"
    },
    {
        nome: "Beatriz",
        telefone: "85 98877-5555"
    },
    {
        nome: "Brenda",
        telefone: "85 98877-5555"
    },
    {
        nome: "João",
        telefone: "85 98877-5555"
    },
    {
        nome: "Smith",
        telefone: "85 98877-5575"
    },
    {
        nome: "Simone",
        telefone: "85 98871-5555"
    },
    {
        nome: "Cláudia",
        telefone: "85 98377-5555"
    },
    {
        nome: "Danrley",
        telefone: "85 98877-5355"
    },
    {
        nome: "Kaiara",
        telefone: "85 98877-5455"
    },
    {
        nome: "Angelo",
        telefone: "85 98677-5555"
    },
    {
        nome: "Otávio",
        telefone: "85 98677-5555"
    }
];

function exibir(cadaContato){
    lista.innerHTML += `<li><strong>${cadaContato.nome}: </strong> ${cadaContato.telefone}</li>`;

}

contatos.forEach(exibir);

// contatos.forEach(function (cadaContato){
//     lista.innerHTML += `<li><strong>${cadaContato.nome}: </strong> ${cadaContato.telefone}</li>`;

// });


// for (x = 0; x <= 9; x++){ 
//     lista.innerHTML += `<li><strong>${contatos[x].nome}: </strong> ${contatos[x].telefone}</li>`;
// }
