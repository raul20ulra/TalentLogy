//Escriba un programa que reciba cuatro calificaciones de un estudiante
//y devuelva el promedio y la máxima y la mínima calificación.

let nota1 = parseInt(prompt("digite la nota una"));
let nota2 = parseInt(prompt("digite la nota  dos"));
let nota3 = parseInt(prompt("digite la nota tres"));
let nota4 = parseInt(prompt("digite la nota cuatro"));

if ((promedio = (nota1 + nota2 + nota3 + nota4) / 4)) {
  console.log("el promedio es:" + promedio);
}

function max(nota1, nota2, nota3, nota4) {
  let max = 0;
  let min = 0;

  if (nota1 > nota2 && nota1 > nota3 && nota1 > nota4) {
    max = nota1;
    return max;
  } else if (nota2 > nota1 && nota2 > nota3 && nota2 > nota4) {
    max = nota2;
    return max;
  } else if (nota3 > nota2 && nota3 > nota1 && nota3 > nota4) {
    max = nota3;
    return max;
  } else if (nota4 > nota2 && nota4 > nota3 && nota4 > nota1) {
    max = nota4;
    return max;
  }
}
console.log("el maximo es: " + max(nota1, nota2, nota3, nota4));

function min(nota1, nota2, nota3, nota4) {
  let min = 0;
  let max = 0;

  if (nota1 < nota2 && nota1 < nota3 && nota1 < nota4) {
    min = nota1;
    return min;
  } else if (nota2 < nota1 && nota2 < nota3 && nota2 < nota4) {
    min = nota2;
    return min;
  } else if (nota3 < nota2 && nota3 < nota1 && nota3 < nota4) {
    min = nota3;
    return min;
  } else if (nota4 < nota2 && nota4 < nota3 && nota4 < nota1) {
    min = nota4;
    return min;
  }
}
console.log("el minimo es: " + min(nota1, nota2, nota3, nota4));
