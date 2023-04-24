/*
Serie Fibonacci con Recursividad: 1.1.2.3.5.8…
*/

let fibo = parseInt(prompt("ingrese el digito"));
let numb1 = 0;
let numb2 = 1;
let valor = 0;
function fibonacci(r) {
  valor = numb1 + numb2;
  //num1  0 // 1 
  //num2  1//1
  //valor 1//2
  r--;
  if (r <= 0) {
    return;
  }
  console.log(valor);
  numb1 = numb2;
  numb2 = valor;
  return fibonacci(r--);
}

fibonacci(fibo);

//3//1