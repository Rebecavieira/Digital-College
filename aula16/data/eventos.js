let d = 1;

while (d <= 31){
    dia.innerHTML += '<option>' + d + '</option>';
    d++;
}

// let m = 1;

// while (m <= 12){
//     mes.innerHTML += '<option>' + m + '</option>';
//     m++;
// }
let m = 0;
let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

while (m < 12){
    mes.innerHTML += '<option>' + meses[m] + '</option>';
    m++;
}

// let a = 2023;

// while (a >= 1950){
//     ano.innerHTML += '<option>' + a + '</option>';
//     a--;
// }

for ( let a = 2023; a >= 1950; a--) {
    ano.innerHTML += '<option>' + a + '</option>';
	// um ou vários comandos a serem executados //	
}