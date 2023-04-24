//Desarrollar un programa que calcule el factorial de un número entero positivo.
//El factorial de un número es el producto de todos los números enteros positivos
//desde 1 hasta el número en cuestión.

let numero = parseInt(prompt("digite el numero"));

let acc = numero;

for (let i = 1; i <= numero; i++) {
  acc = acc * i;
  console.log(acc);
}
console.log("el factorial de :", numero, "es : ", acc);
