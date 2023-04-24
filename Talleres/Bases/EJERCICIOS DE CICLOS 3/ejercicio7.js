/*Escribir un programa que, dadas 5 notas finales, determine cuántas notas fueron mayores
 o iguales a 3.0.*/

let cuentataNotas = 0;

for (let i = 1; i <= 5; i++) {
  let nota = Number(prompt("ingrese la nota"));
  if (nota > 2) {
    cuentataNotas++;
  }
}
console.log("la cantidad de notas mayores a 3 fueron: " + cuentataNotas);
