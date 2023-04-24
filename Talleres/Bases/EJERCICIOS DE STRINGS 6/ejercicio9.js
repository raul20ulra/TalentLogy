/*Que lea una oración desde el teclado y determine cuántas palabras tiene la oración.
 */

let textoArea = prompt("ingrese la oracion");
textoD = textoArea.split(" ");
numeroPalabras = textoD.length;
console.log("la cantidad de palabras es : " + numeroPalabras);
