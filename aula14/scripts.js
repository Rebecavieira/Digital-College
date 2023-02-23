// document.write("<h1>Olá Mundo</h1>");
// document.write("<p>Nosso paragrafo</p>");
// document.write('<button class="btn btn-primary">meu botão</button>');


// alert("Oi Sumida");

// let resposta = prompt();

// if(resposta == "oi"){
//     alert("Eita como ela tá fria...");
// }

// alert("Tudo bem?");

// let resposta2 = prompt();

// if(resposta2 == "tudo"){
//     alert("ta muito ocupada né?");
// } else{
//     alert("ta fazendo oq?");
//     let resposta3 = prompt();
//     if(resposta3 == "nada"){
//         alert("Bora sair?");
//         let resposta4 = prompt();
//         if(resposta4 == "bora"){
//             alert("pra onde?")
//         }
//     }
// }


let conversas = document.querySelector(".conversas");

let botao = document.querySelector(".btn");

let resposta = document.querySelector("#respostas");

conversas.innerHTML = "<div>Olá, seja bem vindo. Em que posso ajudar?</div>";

setTimeout(() => {
    conversas.innerHTML += "<div>1. Financeiro<br> 2.Acadêmico<br> 3.Comercial</div>";
}, 2000);

botao.addEventListener("click",() => {
    switch(resposta.value){
        case "1":
            conversas.innerHTML += "<div> Entendi, você escolheu financeiro</div>";
        break;
        case "2":
            conversas.innerHTML += "<div> Entendi, você escolheu acadêmico</div>";
        break;
        case "3":
            conversas.innerHTML += "<div> Entendi, você escolheu comercial</div>";
        break;
    }
});
