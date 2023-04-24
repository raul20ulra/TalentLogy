/*Escribir un programa que pida al usuario que introduzca una
 frase en la consola y una vocal, y después muestre por pantalla
  la misma frase pero con la vocal introducida en mayúscula.
 */

let frase = prompt("Introduce la frase");
let vocal = prompt("Introduce la vocal");

resultado = frase.replaceAll(vocal, vocal.toUpperCase());
console.log(resultado);

// r a u l => r A u l
