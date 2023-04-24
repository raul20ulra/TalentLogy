/*
Invertir un número entero con Recursividad.
*/

/*let num = parseFloat(prompt("Digite el numero"));
let invertido = "";
let numRes = 0;*/
/*
function invertirNumero() {
  numRes = num % 10;
  if (num > 10) {
    num = Math.round(num / 10);
    invertido = invertido + numRes.toString();
    return invertirNumero();
  } else {
    invertido = invertido + numRes.toString();
    console.log(invertido);

    return invertirNumero();
  }
}
invertirNumero();
*/

function valores(num, acc = "") {
  let parse = num.toString();

  console.log(typeof parse);
  let otra = parse.split("");

  if (!otra.length) return acc;
  console.log(otra);
  acc += otra.pop();
  console.log(acc);
  otra = otra.join("");
  console.log(otra);
  let num1 = Number(otra);
  console.log(typeof num1);
  return 
}

console.log(valores(123));
