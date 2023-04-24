/*
Recibes un Array de números y debes retornar un Array en donde 
cada número sea multiplicado por dos (Utilizar métodos de array).
*/

let numeros = [3, 4, 5, 7];
const numb1 = numeros.map(function (element) {
  return element * 2;
});
console.log(numb1);
