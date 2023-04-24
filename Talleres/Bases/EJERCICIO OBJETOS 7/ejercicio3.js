/*
Crea una clase llamada Cuenta que tendrá los siguientes atributos:
titular y cantidad (puede tener decimales).
El titular será obligatorio y la cantidad es opcional.
Crea dos constructores que cumplan lo anterior.
Crea sus métodos get, set y toString.

Tendrá dos métodos especiales:
--ingresar(double cantidad): se ingresa una cantidad a la cuenta,
si la cantidad introducida es negativa, no se hará nada.
--retirar(double cantidad): se retira una cantidad a la cuenta,
si restando la cantidad actual a la que nos pasan es negativa,
la cantidad de la cuenta pasa a ser 0.
*/
class Cuenta {
  titular;
  cantidad;
  constructor(titular, cantidad) {
    this.titular = titular;
    this.cantidad = cantidad;
  }
  getTitular() {
    return this.titular;
  }
  setTitular(titular) {
    this.titular = titular;
  }
  getCantidad() {
    return this.cantidad;
  }
  setCantidad(cantidad) {
    this.cantidad = cantidad;
  }
  ingreso(cantidad) {
    if (cantidad >= 0) this.cantidad += cantidad;
  }
  retiro(cantidad) {
    if (this.cantidad - cantidad < 0) {
      this.cantidad = 0;
    } else {
      this.cantidad -= cantidad;
    }
    return this.cantidad;
  }
}
const cuenta = new Cuenta(titular, cantidad);
