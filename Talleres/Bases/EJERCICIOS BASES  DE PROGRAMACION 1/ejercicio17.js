//Ingresar por teclado el nombre, la edad y el sexo de cualquier persona e imprima,
//solo si la persona es de sexo masculino y mayor de edad, el nombre de la persona.

let edad = parseInt(prompt("su edad es"));
let sexo = prompt("su sexo");
let nombre = prompt("su nombre es");

if (edad >= 18) {
  console.log("su edad es: " + edad);
}
if (sexo === "masculino") {
  console.log("su sexo es: " + sexo);
  console.log("su nombre es:" + nombre);
} else sexo === "femenino";
{
  console.log("no es apto");
}
