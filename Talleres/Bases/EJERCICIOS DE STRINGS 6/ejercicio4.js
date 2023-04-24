/*Escribir un programa que pida al usuario que introduzca 
una frase en la consola y muestre por pantalla la frase invertida.
 */
let cad = prompt("digite la palabra");
function invertirCadena(cad) {
  var nuevaCadena = "";
  for (var i = cad.length - 1; i >= 0; i--) {
    nuevaCadena += cad[i];
  }
  console.log(nuevaCadena);
}
invertirCadena();
