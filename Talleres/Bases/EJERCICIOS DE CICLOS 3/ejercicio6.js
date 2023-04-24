//Escribir un programa que calcule los primeros ‘n’ números de Fibonacci.
//Los números de Fibonacci comienzan con 0 y 1, y cada término siguiente
//es la suma de los anteriores: 0, 1, 2, 3, 5, 8, 13, 21, …

let fibo = parseInt(prompt("ingrese el numero"));
let fib = function (fibo) {
  if (fibo <= 1) return fibo;

  let numb1 = 0;
  let numb2 = 1;
  let valor = 0;
  console.log(numb1);
  console.log(numb2);
  for (let i = 2; i < fibo; i++) {
    valor = numb2 + numb1;
    numb1 = numb2;
    numb2 = valor;
    console.log(valor);
  }

  return valor;
};
fib(fibo);
