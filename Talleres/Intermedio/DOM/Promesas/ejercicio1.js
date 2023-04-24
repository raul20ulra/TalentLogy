/*Crea una función llamada sum que tome dos números como argumentos y
 devuelva una promesa que resuelva con la suma de estos dos números*/
function sum(num1, num2) {
  return new Promise((resolve, reject) => {
    resolve(num1 + num2);
  });
}
sum(12, 1).then((res) => {
  console.log("El resultado es " + res);
});
