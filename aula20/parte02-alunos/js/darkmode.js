if (localStorage.getItem('darkmode') === "true"){ // se o localstorage estiver verdadeiro, continua verdadeiro.
    dark.checked = true; // marcando o input/switch
    alterarCores();
}

function alterarCores(){
    if (dark.checked){                             
        document.body.classList.add('bg-dark');   // se o input estiver marcado, pega o body e aciona a classe bg-dark
        document.body.classList.add('text-white'); // se o input estiver marcado, pega o body e aciona a classe text-white
       // tabela.classList.add('table-dark');        // se o input estiver marcado, pega o id= tabela e aciona a classe table-dark
        document.getElementById('tabela').classList.add('table-dark'); // é a mesma coisa de adicionar a linha acima.
        document.querySelectorAll('[class="btn btn-warning"]').forEach(function(cadaBotao){ // se o input estiver marcado, altera cada botao, para deixá-lo outline
            cadaBotao.classList.remove('btn-warning');
            cadaBotao.classList.add('btn-outline-warning');
        });
    } else {
        document.body.classList.remove('bg-dark');
        document.body.classList.remove('text-white');
        tabela.classList.remove('table-dark');
        document.querySelectorAll('[class="btn btn-outline-warning"]').forEach(function(cadaBotao){
            cadaBotao.classList.add('btn-warning');
            cadaBotao.classList.remove('btn-outline-warning');
        });
    }
}

function ativarDarkmode(){

    if(dark.checked){
        localStorage.setItem('darkmode', true); // se estiver marcado, salva no localstorage como true
    } else {
        localStorage.setItem('darkmode', false); // se não estiver marcado, salva no localstorage como false
    }
   
    alterarCores();
    
}

 //localStorage.getItem(); Para pegar a informação
 //localStorage.setItem('nome', 'maria'); // Para salvar a informação - atualizar

 //////////////// ARRAY DE OBJETOS /////////////////////

 let alunos = [
    {
        id: 1,
        nome: "Rebeca",
        email: "rebeca@gmail.com",
        telefone: "(85) 98874-6655",
        cidade: "fortaleza"
    },
    {
        id: 2,
        nome: "Mariah",
        email: "mariah@gmail.com",
        telefone: "(85) 98847-6655",
        cidade: "fortaleza"
    },
    {
        id: 3,
        nome: "Cláudia",
        email: "claudia@gmail.com",
        telefone: "(85) 98887-6654",
        cidade: "fortaleza"
    },
    {
        id: 4,
        nome: "Beatriz",
        email: "beatriz@gmail.com",
        telefone: "(85) 98874-6645",
        cidade: "fortaleza"
    },
    {
        id: 5,
        nome: "Brenda",
        email: "brenda@gmail.com",
        telefone: "(85) 98977-6615",
        cidade: "fortaleza"
    },
    
 ];

let tabela = document.getElementById('tabela-body');

alunos.forEach((aluno) => {
    tabela.innerHTML + = `<tr>
                            <td>${aluno.id}</td>
                            <td>${aluno.nome}</td>
                            <td>${aluno.email}</td>
                            <td>${aluno.telefone}</td>
                            <td>${aluno.cidade}</td>
                            <td>
                                <button class="btn btn-warning">Editar</button>
                                <button class="btn btn-danger">Excluir</button>
                            </td>
                        </tr>`;
})

