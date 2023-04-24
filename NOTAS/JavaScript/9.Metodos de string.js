/*
Los métodos de cadena (string) son funciones integradas en 
JavaScript que se utilizan para manipular cadenas de texto. 
Algunos de los métodos más comunes son los siguientes:
*/
{
//toUpperCase: devuelve la cadena en mayúsculas.
let nombre = 'Juan';
let mayusculas = nombre.toUpperCase();
console.log(mayusculas); // muestra 'JUAN'
}
{
//toLowerCase: devuelve la cadena en minúsculas.
let nombre = 'JUAN';
let minusculas = nombre.toLowerCase();
console.log(minusculas); // muestra 'juan'
}
{
//concat: concatena una o varias cadenas con la original.
let saludo = 'Hola';
let nombre = 'Juan';
let mensaje = saludo.concat(', ', nombre, '!');
console.log(mensaje); // muestra 'Hola, Juan!'
}
{
//trim: elimina los espacios en blanco al principio y al final de la cadena.
let texto = '   Hola    ';
let limpio = texto.trim();
console.log(limpio); // muestra 'Hola'
}
{
//replace: reemplaza una parte de la cadena por otra.
let texto = 'Hola Juan';
let nuevoTexto = texto.replace('Juan', 'Pedro');
console.log(nuevoTexto); // muestra 'Hola Pedro'
}
{
//split: convierte una cadena en un arreglo, separando los elementos por un 
//delimitador.
let texto = 'Juan,Pedro,Luis';
let arreglo = texto.split(',');
console.log(arreglo); // muestra ['Juan', 'Pedro', 'Luis']
}
{
//charAt: devuelve el carácter de la cadena en la posición especificada.
let texto = 'Hola';
let caracter = texto.charAt(1);
console.log(caracter); // muestra 'o'
}
{
//indexOf: devuelve la posición de la primera ocurrencia de un texto en la cadena.
let texto = 'Hola Juan';
let posicion = texto.indexOf('Juan');
console.log(posicion); // muestra 5
}
/*
Estos son solo algunos ejemplos de los métodos de cadena que se pueden utilizar 
en JavaScript. Cada uno de ellos tiene sus propias opciones y funcionalidades.

*/