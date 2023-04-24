/*
Pasar de número entero a número binario con Recursividad.
*/

function convertToBinary(number) {
  if (number > 0) {
    return convertToBinary(parseInt(number / 2)) + (number % 2);
  }
  return "";
}

window.onload = function () {
  console.log(convertToBinary(3));
  console.log(convertToBinary(12));
};
