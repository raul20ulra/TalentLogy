/*
Dado un vector de enteros, comprobar el mayor, el menor
y por último la media de todos. 
*/

let numeros = [6, 2, 4, 15];
let resultado = 0;
let mayor = 0;
let menor = numeros[0];
for (let i = 0; i < numeros.length; i++) {
  if (mayor < numeros[i]) {
    mayor = numeros[i];
  }

  if (menor > numeros[i]) {
    menor = numeros[i];
  }

  resultado += numeros[i];
}
console.log("la media es:" + resultado / 4);
console.log("el mayor es:" + mayor);
console.log("el menor es:" + menor);
