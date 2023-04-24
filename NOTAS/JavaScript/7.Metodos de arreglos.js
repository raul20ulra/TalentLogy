/*
--Métodos de arreglo:
Los métodos de arreglo son funciones integradas en JavaScript que 
se utilizan para manipular arreglos. Algunos de los métodos más 
comunes son push, pop, shift, unshift, splice, slice, forEach, 
 map, filter, reduce.
*/

/*Tipos de metodos */
{
//push: agrega uno o más elementos al final del arreglo.
let numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros); // muestra [1, 2, 3, 4]
}
{
//pop: elimina el último elemento del arreglo y lo devuelve.
let numeros = [1, 2, 3];
let ultimo = numeros.pop();
console.log(numeros); // muestra [1, 2]
console.log(ultimo); // muestra 3
}
{
//shift: elimina el primer elemento del arreglo y lo devuelve.
let numeros = [1, 2, 3];
let primero = numeros.shift();
console.log(numeros); // muestra [2, 3]
console.log(primero); // muestra 1
}
{
//unshift: agrega uno o más elementos al principio del arreglo.
let numeros = [1, 2, 3];
numeros.unshift(0, -1);
console.log(numeros); // muestra [-1, 0, 1, 2, 3]
}
{
//splice: elimina elementos del arreglo y/o agrega nuevos elementos.
let numeros = [1, 2, 3, 4, 5];
numeros.splice(2, 2, 6, 7);
console.log(numeros); // muestra [1, 2, 6, 7, 5]
}
{
//slice: devuelve una copia del arreglo con los elementos seleccionados.
let numeros = [1, 2, 3, 4, 5];
let seleccionados = numeros.slice(2, 4);
console.log(seleccionados); // muestra [3, 4]
}
{
//forEach: ejecuta una función para cada elemento del arreglo.
let numeros = [1, 2, 3];
numeros.forEach(numero => console.log(numero));
// muestra:
// 1
// 2
// 3
}
{
//map: crea un nuevo arreglo con los resultados de aplicar una 
//función a cada elemento del arreglo.
let numeros = [1, 2, 3];
let duplicados = numeros.map(numero => numero * 2);
console.log(duplicados); // muestra [2, 4, 6]
}
{
//filter: crea un nuevo arreglo con los elementos que cumplen una condición dada.
let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares); // muestra [2, 4]
}
{
//reduce: aplica una función acumuladora a cada elemento del arreglo para 
//reducirlo a un único valor.
let numeros = [1, 2, 3, 4, 5];
let suma = numeros.reduce((acumulado, numero) => acumulado + numero);
console.log(suma); // muestra 15
}