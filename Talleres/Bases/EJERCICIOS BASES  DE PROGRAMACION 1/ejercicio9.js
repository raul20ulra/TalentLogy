//Calcular el nuevo salario de un obrero, si obtuvo 
//un incremento del 25% sobre su salario anterior.
//       V+((P/100)*V)

let precio = parseInt(prompt("ingrese el precio del producto"));
let incremento = 25
console.log( (precio + (precio * ( incremento/ 100))))