//Calcular el mayor de dos números leídos del teclado y visualizarlo en pantalla.

let num1 = parseInt(prompt("digite el primer numero"));
let num2 = parseInt(prompt("digite el segundo numero"));

if (num1 > num2) {
  alert(num1 + " Es el mayor.");
} else {
  alert(num2 + " Es el mayor.");
}
