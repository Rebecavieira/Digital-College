// formas de pagamento
// a vista
// parcelado 2x
// parcelado 3x

// atividade 11 ou 12 

// function caucularPreco(valor, forma, tipo){
//     if(forma == 'a vista'){
//         if(tipo == "dinheiro" || tipo == "cheque"){
//             // preço - 10%
//             alert("no dinheiro ou no cheque")
//         }else{
//             // preço - 15%
//             alert("no cartao a vista")
//         }
//     }else{
//         if(forma == "parcelado 2x"){
//             // preço normal da etiqueta
//             alert("parcelado 2x")
//         }else{
//             // preço normal da etiqueta + 10% 
//             alert("mais de 2x")
//         }

//     }
// }

// caucularPreco(10, "parcelado 3x", "cartão");

// atividade 6

// let de0a25 = 0;
// let de26a50 = 0;
// let de15a75 = 0;
// let de76a100 = 0;

// let numeros = [5, 7, 24, 32, 54, 72, 98, 80, 14, 21, 60];
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] <= 0 && numeros[i] < 26){
//         de0a25++;
//     }
// }

function posterior(){
    let itemAtivo = document.querySelector(".active");
    let posicaoAtiva = itemAtivo.getAttribute("posicao");
    let todosItems = document.querySelectorAll("li");
    if(posicaoAtiva == todosItems.length){
        posicaoAtiva = 1;
    }else{
        posicaoAtiva++;
    }
    for(let i = 0; i < todosItems.length; i++){
        if(todosItems[i].getAttribute("posicao") == posicaoAtiva){
            todosItems[i].classList.add("active")
        }else{
            todosItems[i].classList.remove("active")
        }
    }
}

// function anterior(){
//     let itemAtivo = document.querySelector(".active");
//     let posicaoAtiva = itemAtivo.getAttribute("posicao");
//     let todosItems = document.querySelectorAll("li");
//     if(posicaoAtiva == 1){
//         posicaoAtiva = todosItems.length;
//     }else{
//         posicaoAtiva--;
//     }
//     for(let i = 0; i < todosItems.length; i++){
//         if(todosItems[i].getAttribute("posicao") == posicaoAtiva){
//             todosItems[i].classList.add("active")
//         }else{
//             todosItems[i].classList.remove("active")
//         }
//     }
// }

function anterior(){
    let itemAtivo = document.querySelector(".active");
    let posicaoAtiva = itemAtivo.getAttribute("posicao");
    let todosItems = document.querySelectorAll("li");
    if(posicaoAtiva == 1){
        posicaoAtiva = todosItems.length;
    }else{
        posicaoAtiva--;
    }
    for(let i = 0; i < todosItems.length; i++){
        (todosItems[i].getAttribute("posicao") == posicaoAtiva) ? todosItems[i].classList.add("active") : todosItems[i].classList.remove("active") // exemplo de reduzir o if e else com uso de () ? :
    }
}
