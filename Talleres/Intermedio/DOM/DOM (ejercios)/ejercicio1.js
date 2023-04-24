// const botonSunar = document.getElementById("btnsumar");
function sumar() {
    let resultado = document.getElementById("resultado");
    console.log(resultado);
    console.log(resultado.textContent);
    let valorActual = Number(resultado.textContent);
    resultado.textContent = valorActual + 1;
    console.log("+1");
  }
  function restar() {
    // me trae el html del elemento con ese id
    let resultado = document.getElementById("resultado");
    console.log(resultado);
    console.log(resultado.textContent);
    // text.content es para obtener el valor de ese elemento
    let valorActual = Number(resultado.textContent);
    resultado.textContent = valorActual - 1;
    console.log("-1");
  }
  