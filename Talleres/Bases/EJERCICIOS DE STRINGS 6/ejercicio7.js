/*Escribir un programa que pregunte al usuario la fecha de su
 nacimiento en formato dd/mm/aaaa y muestra por pantalla, el 
 día, el mes y el año. Adaptar el programa anterior para que 
 también funcione cuando el día o el mes se introduzcan con 
 un solo carácter.
 */
let fecha = prompt("introduzca su fecha de nacimiento dd/mm/aaaa");
newfecha = fecha.split("/");
console.log(newfecha);
console.log("dia" + newfecha[0]);
console.log("mes" + newfecha[1]);
console.log("año" + newfecha[2]);

// console.log(new Date(fecha));

