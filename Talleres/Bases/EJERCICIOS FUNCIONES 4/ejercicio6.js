/*
Hacer un programa que muestre una tabla de multiplicar hasta el 20
de un número cualquiera por pantalla, el número se pedirá en el 
programa principal. Usar procedimiento
*/

function tabla() {
  let numero = parseInt(prompt("ingrese el numero"));
  multiplicador = 0;
  if (isNaN(numero)) {
    alert("digite solo numeros");
  }
  for (multiplicador = 0; multiplicador <= 20; multiplicador++) {
    resultado = multiplicador * numero;
    console.log(numero + "x" + multiplicador + "es" + resultado);
  }
}
tabla();
