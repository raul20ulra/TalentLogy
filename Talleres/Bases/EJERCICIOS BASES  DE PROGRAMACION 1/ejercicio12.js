//Visualizar la tarifa de la luz según el gasto de corriente eléctrica.
//Para un gasto  menor de 1.000Kwxh la tarifa es 1.2, entre 1.OOO y 1.850Kwxh
//es 1.0 y mayor de  1.85OKwxh 0.9.

let gasto = parseInt(prompt("digite el gasto de la corriente electrica"));

if (gasto <= 1000) {
  console.log(gasto * 1.2);
  console.log("la tarifa es de 1.2");
}

if (gasto > 1000 && gasto < 1850) {
  console.log(gasto * 1.0);
  console.log("la tarifa es de 1.o");
}
if (gasto > 1850) {
  console.log(gasto * 0.9);
  console.log("la tarifa es de 0.9");
}
