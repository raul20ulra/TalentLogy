/*
Crea una clase Cuenta con los métodos ingreso, reintegro y
transferencia. La clase contendrá un constructor por defecto 
y los métodos getters y setters.
*/
class Cuenta {
  usuario;
  cantidad;
  constructor(usuario, cantidad) {
    this.usuario = usuario;
    this.cantidad = cantidad;
  }
  getUsuario() {
    return this.usuario;
  }
  setUsuario(usuario) {
    this.usuario = usuario;
  }
  getDinero() {
    return this.cantidad;
  }
  setDinero(cantidad) {
    this.cantidad = cantidad;
  }
  ingreso() {}
  reintegro() {}
  transferencia() {}
}
const cuenta = new Cuenta(usuario, cantidad);
