let ladoA = prompt("Qual o lado A?");
let ladoB = prompt("Qual o lado B?");
let ladoC = prompt("Qual o lado C?");

// if (ladoA == ladoB && ladoB == ladoC){
//     alert("Equilatero");
// } else if (ladoA == ladoB && ladoB != ladoC || ladoC == ladoA && ladoA != ladoB || ladoB == ladoC && ladoC != ladoA){
//     alert("Isosceles");
// } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC){
//     alert("Escaleno");
// }

if (ladoA == ladoB && ladoB == ladoC){
    alert("Equilatero");
} else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC){
    alert("Escaleno");
} else {
    alert("Isosceles")
} 
