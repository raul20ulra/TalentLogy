/*
Hacer un programa que muestre un menú con las opciones sumar, restar, multiplicar 
y dividir, el programa solicitará una opción y realizará la tarea elegida, se debe 
usar procedimientos.
 */

function res() {
  let num1 = parseInt(prompt("digite un numero"));
  let num2 = parseInt(prompt("digite el segundo numero"));
  let operacion = prompt("que operacion es");
  if (isNaN(num1) || isNaN(num2)) {
    alert("digite solo numeros");
  }
  suma = num1 + num2;
  resta = num1 - num2;
  multiplicacion = num1 * num2;
  division = num1 / num2;
  switch (operacion) {
    case "suma":
      op = "la suma es: " + suma;
      break;

    case "resta":
      op = "la resta es: " + resta;
      break;

    case "multiplicacion":
      op = "la multiplicacion es: " + multiplicacion;
      break;

    case "division":
      op = "la division es: " + division;
      break;
  }
  console.log(`el resultado de ${op}`);
}

res();
