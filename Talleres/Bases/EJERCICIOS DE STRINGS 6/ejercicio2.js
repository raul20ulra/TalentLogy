/*Escribir un programa que pregunte el nombre del usuario 
en la consola y después de que el usuario lo introduzca muestre
por pantalla <NOMBRE> tiene <n> letras, donde <NOMBRE> es el 
nombre de usuario en mayúsculas y <n> es el número de letras
que tienen el nombre.
*/

let nombre = prompt("introduzca su nombre");
console.log("su nombre es: " + nombre.toUpperCase());
console.log("y tiene " + nombre.length + " letras");
