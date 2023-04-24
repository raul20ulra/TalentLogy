let boton = document.getElementById("btnClick");
let compras = [];

boton.addEventListener("click", (e) => {
  e.preventDefault();

  let producto = document.getElementById("producto").value;
  let precio = document.getElementById("precio").value;
  let cantidad = document.getElementById("cantidad").value;
  console.log({ producto, precio, cantidad });
  agregarProductos(producto, precio, cantidad);
  
});

function agregarProductos(producto, precio, cantidad) {
  let objeto = {
    producto,
    precio,
    cantidad,
  };

  compras.push(objeto);
}
