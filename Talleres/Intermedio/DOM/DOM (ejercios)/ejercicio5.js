/*crear una lista de tareas q pide las tareas y q tambien tenga un boton para borrarlas*/

const formulario = document.getElementById("formulario");
const nuevaTareaInput = document.getElementById("nuevaTarea");
const listaTareas = document.getElementById("tareas");
let tareas = [];

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const tarea = nuevaTareaInput.value.trim();
  if (tarea) {
    tareas.push(tarea);
    actualizarListaTareas();
    nuevaTareaInput.value = "";
  }
});
function actualizarListaTareas() {
  listaTareas.innerHTML = "";
  tareas.forEach((tarea, indice) => {
    const li = document.createElement("li");
    li.innerText = `${indice + 1}. ${tarea}`;
    listaTareas.appendChild(li);
  });
}
function actualizarListaTareas() {
  listaTareas.innerHTML = "";
  tareas.forEach((tarea, indice) => {
    const li = document.createElement("li");
    li.innerText = `${indice + 1}. ${tarea}`;
    const botonBorrar = document.createElement("button");
    botonBorrar.innerText = "Borrar";
    botonBorrar.addEventListener("click", () => {
      tareas = tareas.filter((_, index) => index !== indice);
      actualizarListaTareas();
    });
    li.appendChild(botonBorrar);
    listaTareas.appendChild(li);
  });
}
