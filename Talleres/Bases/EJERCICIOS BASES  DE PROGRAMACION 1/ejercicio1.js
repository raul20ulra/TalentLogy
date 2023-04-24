//Pedir 2 números al usuario y sumarlos, restarlos, multiplicarlos y dividirlos.
let num1 = parseInt(prompt("numero 1 es"));
let num2 = parseInt(prompt("numero 2 es"));
if (isNaN(num1) || isNaN(num2)) {
  alert("solo numeros ");
}

let suma = num1 + num2;

console.log("la suma es: " + suma);

let resta = num1 - num2;

console.log("la resta es: " + resta);

let multiplicacion = num1 * num2;

console.log("la multiplicacion es: " + multiplicacion);

let division = num1 / num2;

console.log("la division es: " + division)

