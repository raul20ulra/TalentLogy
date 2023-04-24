//Ingrese un número y calcule e imprima su raíz cuadrada.
// Si el número es negativo  imprima el número y un mensaje
//que diga “tiene raíz imaginaria”.

// Math. sqrt()

let num1 = parseInt(prompt("digite el numero"));
num1 = Math.sqrt(num1);

if (num1 >= 0) {
  console.log("su raiz es" + num1);
} else {
  console.log(" tiene raiz imaginaria");
}
