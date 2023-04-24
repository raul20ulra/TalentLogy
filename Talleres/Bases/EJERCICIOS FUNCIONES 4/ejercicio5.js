/*
Hacer un programa que pida por pantalla una temperatura en grados Celsius,
muestre un menú para convertirlos a Fahrenheit o Kelvin y muestre el equivalente
por pantalla, utilizando funciones.
Celsius a Fahrenheit: F = (9*C)/5 + 32;
Celsius a Kelvin: K = C + 273.15;
*/

function resultado()
{let celcius = (parseInt(prompt("ingrese los grados Celcius")));
let convertirlos = (prompt("quiere convertirlos a fahrenheit  o kelvin (escriba en minusculas)"));
switch (convertirlos)
{
case "fahrenheit":
resultado = ((celcius * 1.8) + 32) + "F"
break;

case "kelvin":
resultado= ((celcius)+ 273.15) + "K"
break;
}
console.log("la convercion es:  " + resultado);}
resultado();
