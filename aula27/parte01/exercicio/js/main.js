// function alterarConteudo(x) {
//      if (x === 'listar') {
//          alert(listar());
//      }else if (x === 'cadastro'){
//          alert(cadastro());
//      } else if (x === 'relatorio'){
//          alert(relatorio());
//      }

//     alert(window[x]()); esse código substitui o de cima

// }

// import listar from "./listar.js";  - importar os arquivos
// import cadastro from "./cadastro";
// import relatorio from ".relatorio";

function alterarConteudo(x) {
    conteudo.innerHTML = window[x]();

}


