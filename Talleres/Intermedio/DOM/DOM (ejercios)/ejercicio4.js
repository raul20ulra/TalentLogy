const tabla = [];
function calcularPromedio() {
  const asignatura = document.getElementById("asignatura").value;
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const promedio = (nota1 + nota2 + nota3) / 3;
  document.getElementById("promedio").innerHTML = promedio.toFixed(2);
  let valores = {
    asignatura,
    nota1,
    nota2,
    nota3,
    promedio,
  };
  tabla.push(valores);
  dibujar();
}

function dibujar() {
  let contenedor = document.getElementById("nuevo");
  let html = ``;
  let color
  tabla.forEach((valores) => {
    if (valores.promedio < 5 && valores.promedio >=0) {
      color = "red";
    }else if(valores.promedio>=5 && valores.promedio<8){
color= "yellow"
    }
    else if(valores.promedio>=8 && valores.promedio<=10){
      color="green"
    }
    html += `
<tr class=${color}>
<td>${valores.asignatura}</td>
<td>${valores.nota1}</td>
<td>${valores.nota2}</td>
<td>${valores.nota3}</td>
<td>${valores.promedio}</td>
</tr>
`;
  });
  contenedor.innerHTML = html;
}

