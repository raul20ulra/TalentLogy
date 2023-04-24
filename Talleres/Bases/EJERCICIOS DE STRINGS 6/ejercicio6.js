/*Escribir un programa que pregunte el correo electrónico del usuario
} en la consola y muestre por pantalla otro correo electrónico con el
 mismo nombre (la parte delantera de la arroba @) pero con dominio ceu.es.
 */

let email = prompt("introduce el correo");
let correo = email.split("@");
let value = correo[0];
console.log(value + "ceu.es");
