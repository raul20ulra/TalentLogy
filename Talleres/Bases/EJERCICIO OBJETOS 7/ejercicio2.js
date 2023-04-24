/*
Crea una clase Contador con los métodos para incrementar y
decrementar el contador. La clase contendrá un constructor 
por defecto y los métodos getters y setters. */
class Contador {
  cantidad;
  constructor(cantidad) {
    this.cantidad = cantidad;
  }
  getDinero() {
    return this.cantidad;
  }
  setDinero(cantidad) {
    this.cantidad = cantidad;
  }
  incremento() {
    this.cantidad++;
  }
  decremento() {
    this.cantidad--;
  }
}
const contador = new Contador(cantidad);
