/*
Realizar un programa que tenga una clase Persona con las siguientes 
características. La clase tendrá como atributos el nombre y la edad de una persona.
Implementar los métodos necesarios para inicializar los atributos, mostrar los datos
e indicar si la persona es mayor de edad o no.
*/
class Persona {
  nombre;
  edad;
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  getNombre() {
    return this.nombre;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  getEdad() {
    return this.edad;
  }
  setEdad(edad) {
    this.edad = edad;
  }
  mayor() {
    if (this.edad >= 18) {
      console.log(" es mayor de edad");
    } else {
      console.log(" es menor de edad");
    }
    return (
      " la Persona del nombre " + this.getNombre() + "su edad es" + this.mayor()
    );
  }
}
const persona = new Persona(nombre, edad);
