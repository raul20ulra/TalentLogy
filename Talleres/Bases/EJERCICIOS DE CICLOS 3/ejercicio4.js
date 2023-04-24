//Construir un programa que calcule y visualice por pantalla el factorial de todos
// los valores numéricos enteros entre 1 y 10.

// function factorial(contador) {
//   for (let contador = 0; contador < 10; contador++) {
//     return contador;
//   }
// }
// console.log(contador);

function factorial(numero) {
  let acc = 1;

  for (let i = 1; i <= numero; i++) {
    acc = acc * i;
  }
  console.log("el factorial de :", numero, "es : ", acc);
}

factorial(1);
factorial(2);
factorial(3);
factorial(4);
factorial(5);
factorial(6);
factorial(7);
factorial(8);
factorial(9);
factorial(10);
