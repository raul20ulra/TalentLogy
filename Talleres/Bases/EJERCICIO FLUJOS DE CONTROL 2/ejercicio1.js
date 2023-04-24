//Escribe un programa que pregunte al usuario si es culpable o no. Asumiremos que:
//En caso afirmativo el usuario responderá si
//En caso contrario responderá no.
//Si el usuario responde si se escribirá el documento «irás a la cárcel».

let pregunta = prompt("¿eres culpable?");
if (pregunta === "si") {
  console.log("iras a la carcel");
} else {
  console.log("eres libre");
}
