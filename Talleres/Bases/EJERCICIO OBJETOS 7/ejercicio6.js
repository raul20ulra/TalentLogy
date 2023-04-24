/*
Desarrollar un programa que cargue los datos de un triángulo.
Implementar una clase con los métodos para inicializar los 
atributos, imprimir el valor del lado con un tamaño mayor y
el tipo de triángulo que es (equilátero, isósceles o escaleno). */
class Triangulo {
  lado1;
  lado2;
  lado3;
  constructor(lado1, lado2, lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }
  ladoM() {
    if (this.lado1 >= this.lado2 && this.lado1 >= this.lado3) {
      return "El lado mayor es el lado uno que mide: " + this.lado1 + " cm ";
    }
    if (this.lado2 >= this.lado1 && this.lado2 >= this.lado3) {
      return "El lado mayor es el lado dos que mide: " + this.lado2 + " cm";
    }
    if (this.lado3 >= this.lado2 && this.lado3 >= this.lado1) {
      return "El lado mayor es el lado tres que mide: " + this.lado3 + " cm ";
    }
  }
  tipo() {
    if (
      this.lado1 == this.lado2 ||
      this.lado2 == this.lado3 ||
      this.lado1 == this.lado3
    ) {
      return "isoceles";
    }
    if ((this.lado1 == this.lado2) == this.lado3) {
      return "equilatero";
    } else {
      return "escaleno";
    }
  }
}
const triangulo = new Triangulo(lado1, lado2, lado3);
console.log(triangulo.ladoM());
console.log(triangulo.tipo());
