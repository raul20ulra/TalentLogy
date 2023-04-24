/*
Diseñar el algoritmo correspondiente a un programa, que:
Crea una tabla bidimensional de longitud 5x5 y nombre ‘matriz’.
Carga la tabla con valores numéricos enteros.
Suma todos los elementos de cada fila y todos los elementos de 
cada columna visualizando los resultados en pantalla 
*/

let arrayBidimensional = new Array(5);
for (let i = 0; i < 4; i++) {
  arrayBidimensional[i] = [i];
}

for (let i = 0; i < 4; i++) {
  console.log(arrayBidimensional[i] * arrayBidimensional[i]);
}

console.log("1+2 es:" + arrayBidimensional[0] + arrayBidimensional[1]);
