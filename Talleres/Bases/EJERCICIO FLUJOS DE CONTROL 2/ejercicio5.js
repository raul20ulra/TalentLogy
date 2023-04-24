//Pedir una calificación  de 0 a 10 y mostrar de la siguiente manera:
//Insuficiente, Suficiente, Bien, Excelente

let nota = parseInt(prompt("digite su nota"));

if (nota <= 49) {
  console.log("la nota es insuficiente");
} else if (nota === 50) {
  console.log("la nota es suficiente");
}
if (nota >= 51 && nota <= 80) {
  console.log("la nota es bien");
} else if (nota >= 81) {
  console.log("la nota es excelente");
}
