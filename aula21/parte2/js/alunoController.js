// READ
function listarAlunos(){

    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    let tabela = document.getElementById("tabela-body");
    alunos.forEach((aluno, key) => {
        tabela.innerHTML += `<tr>
                                <td>${key}</td>
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
}

// CREATE

function salvarAluno(){
    event.preventDefault();
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    } 
    alunos.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(alunos));
    alert("Salvo com Sucesso!");
}

// UPDATE

function atualizarAluno(){}

// DELETE

function deletarAluno(){
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
}




















//pega um array de objetos e transforma em texto - JSON stringify
