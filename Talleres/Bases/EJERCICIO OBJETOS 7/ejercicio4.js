/*
Realizar un programa que conste de una clase llamada Alumno
que tenga como atributos el nombre y la nota del alumno. Definir 
los métodos para inicializar sus atributos, imprimirlos y mostrar
un mensaje con el resultado de la nota y si ha aprobado o no.´
*/
class Alumno {
  // atributos
  nota;
  nombre;
  // métodos
  constructor(nota, nombre) {
    this.nombre = nombre;
    this.nota = nota;
  }
  getNombre() {
    return this.nombre;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  getNota() {
    return this.nota;
  }
  setNota(nota) {
    this.nota = nota;
  }
  aprobo() {
    if (nota >= 3) {
      console.log("aprobo");
    } else nota < 3;
    {
      console.log("reprobo");
    }

    return " el alumno" + this.nombre + "saco la nota" + this.nota;
  }
}
const alumno = new Alumno(nota, nombre);