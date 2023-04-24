let boton = document.getElementById("btnClick");
let compras = [];
let total = 0;

boton.addEventListener("click", (e) => {
  e.preventDefault();

  let producto = document.getElementById("producto").value;
  let precio = Number(document.getElementById("precio").value);
  let cantidad = Number(document.getElementById("cantidad").value);
  //$console.log({ producto, precio, cantidad, compras });
  agregarProductos(producto, precio, cantidad);
  calculartotal();
  dibujar();
});

function agregarProductos(producto, precio, cantidad) {
  let objeto = {
    producto,
    precio,
    cantidad,
    total: precio * cantidad,
  };

  compras.push(objeto);
}
function calculartotal() {
  total = compras.reduce((acc, value) => acc + value.total, 0);
  let conteo = document.getElementById("conteo");
  conteo.textContent = total;
}
function dibujar() {
  let contenedor = document.getElementById("elementos");
  let html = ``;
  compras.forEach((objeto) => {
    html += `
<tr>
  <td>${objeto.producto}</td>
  <td>${objeto.precio}</td>
  <td>${objeto.cantidad}</td>
  </tr>

`;
  });
  console.log(html);
  contenedor.innerHTML = html;
}
