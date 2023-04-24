/*
Crea un array o arreglo unidimensional con un tamaño de 10,
inserta los valores numéricos que desees de la manera que quieras
y muestra por pantalla la media de valores del array.
*/

let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
values.sort((a, b) => a - b);
let lowMiddle = Math.floor((values.length - 1) / 2);
let highMiddle = Math.ceil((values.length - 1) / 2);
let median = (values[lowMiddle] + values[highMiddle]) / 2;

console.log(median);
