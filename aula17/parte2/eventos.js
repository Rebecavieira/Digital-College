// let nota1 = 10;
// let nota2 = 9;
// let nota3 = 8.5;
// let nota4 = 9.8;

function calcularMedia(notas) {
    let total = notas[0] + notas[1] * 2 + notas[2] + notas[3];

    let media = total/5;

    return media.toFixed(1);
}

let mediaG = calcularMedia([10, 9.5, 9, 9.8]);
document.write("Média do Gleidson: " + mediaG);

let mediaA = calcularMedia([9, 7, 9, 6.8]);
document.write("<br>Média do Ale: " + mediaA);

let mediaB = calcularMedia([9, 7, 9, 6.8]);
document.write("<br>Média de B: " + mediaB);

// let notas = [10, 9, 8.5, 9.8];

// let total = notas[0] + notas[1] + notas[2] + notas[3];

// alert("Sua média é: " + total/4);

// let notasG = [10, 9.8, 7.6, 10];

// let totalG = notasG[0] + notasG[1] + notasG[2] + notasG[3];

// alert("A média de G é: " + totalG/4);