/*
Realizar un programa en el cual se declaran dos valores enteros
por teclado utilizando el método constructor. Calcular después 
la suma, resta, multiplicación y división. Utilizar un método
para cada una e imprimir los resultados obtenidos. Llamar a 
la clase Calculadora.
*/
let valor1 = prompt("Ingrese el valor 1");
let valor2 = prompt("Ingrese el valor 2");
class Calculadora {
  valor1;
  valor2;
  constructor(valor1, valor2) {
    this.valor1 = valor1;
    this.valor2 = valor2;
  }
  suma() {
    return "la suma es " + this.valor1 + this.valor2;
  }
  resta() {
    return "la resta es" + this.valor1 - this.valor2;
  }
  multiplicacion() {
    return "multiplicacion" + this.valor1 * this.valor2;
  }
  division() {
    return "divsion" + this.valor1 / this.valor2;
  }
}

const calculadora = new Calculadora(valor1, valor2);
console.log(calculadora.suma());
console.log(calculadora.resta());
console.log(calculadora.multiplicacion());
console.log(calculadora.division());
