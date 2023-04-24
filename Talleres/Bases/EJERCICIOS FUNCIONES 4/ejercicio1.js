/*
Determinar si un número es par o no 
*/

let pares = (parseInt(prompt("ingrese el numero")));

function resultado(p) {
  console.log(p);
  if (p % 2 == 0) {
    console.log("el numero: " + p + " es par");
  } else {
    console.log("el numero:" + p + "no es par");
  }
}
resultado(pares);
