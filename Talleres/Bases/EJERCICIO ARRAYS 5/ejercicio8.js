/*
Suponga un array con N números enteros generados aleatoriamente y
mostrados en pantalla, N debe ser un número impar, mostrar en 
pantalla el valor que ocupa el centro del array.

*/
let equis;

function valorCentralArreglos(n) {
  let A = [];
  if (n % 2 != 0) {
    for (let i = 0; i < n; i++) {
      equis = Math.floor(Math.random() * (10 - 1) + 1);
      A.push(equis);
    }
    console.log(A);

    return A[Math.floor(n / 2)];
  }
}

console.log(valorCentralArreglos(11));
