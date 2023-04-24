/*
Suponga un array con N notas de 0 a 20, calcule el promedio de aprobados 
y el promedio de los desaprobados e indique la cantidad de aprobados y desaprobados.
*/

let notas = [11, 14, 13, 6, 6, 7, 9, 2];
let accMax = 0;
let accmin = 0;
let cantidadAprobados = 0;
let cantidadNoAprobados = 0;

for (let i = 0; i < notas.length; i++) {
  if (notas[i] > 10) {
    accMax = accMax + notas[i];
    cantidadAprobados++;
  } else {
    accmin = accmin + notas[i];
    cantidadNoAprobados++;
  }
}
console.log(
  "la suma total de aprobados es :",
  accMax,
  " y  su promedio es :",
  accMax / cantidadAprobados
);
console.log(
  "la suma total de no aprobados es :",
  accmin,
  "y  su promedio es :",
  accmin / cantidadNoAprobados
);
