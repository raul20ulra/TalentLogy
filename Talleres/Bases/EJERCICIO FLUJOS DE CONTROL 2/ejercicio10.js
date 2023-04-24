//Pida a usuario la edad y el sexo, para que la computadora
//le indique si ya puede jubilarse. Tome en cuenta que un Hombre
// se puede jubilar cuando tenga 60 años o más, en cambio, una mujer
//mayor se jubilara si tiene más de 54 años.

let sexo = prompt("su sexo");
let edad = parseInt(prompt("su edad es"));

if (sexo === "masculino") {
  console.log("su sexo es: " + sexo);
  if (edad >= 60) {
    console.log(" se puede jubilar");
  } else {
    console.log("no puede jubilarse");
  }
}

if (sexo === "femenino") {
  console.log("su sexo es: " + sexo);

  if (edad >= 54) {
    console.log(" se puede jubilar");
  } else {
    console.log("no puede jubilarse");
  }
}
