/*
Hacer un programa que muestre 3 números ordenados ascendentemente, 
utilizando un procedimiento para cada operación. 
*/

let nota1 = parseInt(prompt("digite la nota una"));
let nota2 = parseInt(prompt("digite la nota  dos"));
let nota3 = parseInt(prompt("digite la nota tres"));

function max(nota1, nota2, nota3)
 {
  let max = 0; 
  let min = 0;

  if (nota1 > nota2 && nota1 > nota3 && nota1 ) {
    max = nota1;
    return max;
  } else if (nota2 > nota1 && nota2 > nota3 && nota2 ) {
    max = nota2;
    return maxlet (parseInt (prompt ("digite la nota uno")));
  } else if (nota3 > nota2 && nota3 > nota1 && nota3 ) {
    max = nota3;
    return max;
  }
}
console.log("el maximo es: " +(max(nota1, nota2, nota3)));


function med (nota1, nota2, nota3)
{
let min = 0
let max = 0
let med = 0
if (nota1 > nota2 && nota1 < nota3 ) {
    med = nota1;
    return med;
  } else if (nota2 > nota1 && nota2 < nota3) {
    med = nota2;
    return med;
  } else if (nota3 > nota2 && nota3 < nota1 ) {
    med = nota3;
    return med;
  }
} 
console.log ("el medio es: "  + (med(nota1, nota2, nota3)));

function min(nota1, nota2, nota3) 
{
  
 let min = 0;
  let max = 0;

  if (nota1 < nota2 && nota1 < nota3 ) {
    min = nota1;
    return min;
  } else if (nota2 < nota1 && nota2 < nota3) {
    min = nota2;
    return min;
  } else if (nota3 < nota2 && nota3 < nota1 ) {
    min = nota3;
    return min;
  }
}
console.log ("el minimo es: " + (min(nota1, nota2, nota3)));
