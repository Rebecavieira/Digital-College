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