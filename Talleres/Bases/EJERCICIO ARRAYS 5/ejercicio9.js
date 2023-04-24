/*
Queremos guardar los nombres y las edades de los alumnos de un curso. 
Realiza un programa que introduzca el nombre y la edad de cada alumno.
El proceso de lectura de datos terminará cuando se introduzca como nombre 
un asterisco (*) Al finalizar se mostrará los siguientes datos:
Todos los alumnos mayores de edad.
Encontrar la edad mayor y obtener los alumnos que posean dicha edad.
*/

function cantidad() {
  let nombres = [];
  let edades = [];
  let mayor = 0;
  let nombre = 0;
  // for (let nombre = 0; nombre < 5; nombre++)
  while (nombre != "*") {
    nombre = prompt("su nombre es");
    let edad = parseInt(prompt("su edad es"));
    if (edad >= 18) {
      nombres.push(nombre);
      Number(edades.push(edad));
    }

    console.log(nombres);
    console.log(edades);
    mayor = Math.max(...edades);
  }
  console.log("el de mayor edad es  " + mayor);
}
cantidad();
