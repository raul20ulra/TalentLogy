//Una distribuidora de motocicletas tiene una promoción de fin de año qué consiste 
//en lo siguiente. Las motos marca Honda tienen un descuento del 5%, las marcas 
//Yamaha del 8% y las Suzuki del 10%, las otras marcas 2%

let marca = (prompt("marca de la moto"));
let precio = parseInt(prompt("precio de la moto"));
let percentage = (2/100);
switch(marca)
{
  case "honda":
    percentage = (5/ 100);
  break;
  case "yamaha":
    percentage = (8/ 100);
  break;
  case "suzuki":
    percentage = (10/ 100);
  break;
  default:
    percentage = (2/ 100);
  break;
}

const precioFinal = (precio - (precio * percentage ) );
console.log(`El precio final es: ${precioFinal}`);


