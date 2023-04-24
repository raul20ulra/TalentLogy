/*Crear Función que determine si un string numérico es capicua
 ejemplo: “12321” */
let valor = parseInt(prompt("digit el numero"));
let capicua = (numero) => {
  numero = numero.toString();
  return numero.split("").reverse().join("") === numero;
};
console.log(capicua(valor));
