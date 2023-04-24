//Realizar un algoritmo para determinar cuánto ahorrará una persona en un año,
// si al final de cada mes deposita cantidades variables de dinero; además,
//se quiere saber cuánto lleva ahorrado cada mes.

let ahorro = 0;
for (i = 1; i <= 12; i++) {
  let mes = parseInt(prompt("ingrese lo ahorrado del mes"));
  ahorro += mes;
  console.log("ahorro en el mes:" + i + "es de:" + mes);
}

console.log("ahorro en el año:" + ahorro);

