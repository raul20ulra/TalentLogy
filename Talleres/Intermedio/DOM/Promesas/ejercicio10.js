/*Crea una función llamada getUserInfo que tome un ID de usuario como argumento
 y devuelva una promesa que resuelva con un objeto que contenga la siguiente 
 información del usuario: nombre, correo electrónico, edad, ciudad de residencia
  y los últimos 5 tweets del usuario (usando el nombre de usuario).
Para resolver este ejercicio, debes crear varias funciones que devuelvan 
promesas para obtener cada una de las piezas de información del usuario:

1--Crea una función llamada getUserData que tome un ID de usuario como 
argumento y devuelva una promesa que resuelva con un objeto de datos del 
usuario con ese ID (puedes simular la respuesta de una API externa 
usando setTimeout).

2--Crea una función llamada getUserTweets que tome un nombre de usuario 
como argumento y devuelva una promesa que resuelva con una lista de los 
últimos 5 tweets del usuario (puedes simular la respuesta de una API 
externa usando setTimeout).

3--Crea una función llamada getUserAge que tome una fecha de nacimiento 
como argumento y devuelva una promesa que resuelva con la edad del usuario 
en años (puedes calcular la edad usando la fecha actual).

4--Utiliza las funciones anteriores dentro de getUserInfo para obtener 
la información del usuario, y devuelve un objeto con toda la información obtenida.
 */
function getData() {
  let datos = [];
  datos = [
    {
      name: "carlos",
      age: 24,
      id: 2240,
      fechaNacimiento: "09/09/1999",
      ciudad: "medellin",
      correo: "erfnk@gmail.com",
    },
    {
      name: "pedro",
      age: 10,
      id: 1234,
      fechaNacimiento: "12/01/2013",
      ciudad: "cucuta",
      correo: "pedro234@gmail.com",
    },
  ];

  return datos;
}
function getUserInfo(id) {
  let objeto = {
    nombre: getUserData(id).name,
    correo: getUserData(id).correo,
    edad: getUserAge(getUserData(id).fechaNacimiento),
    ciudad: getUserData(id).ciudad,
  };
  return new Promise((resolve, reject) => {
    if (objeto != null) {
      resolve(console.log(objeto));
    } else {
      reject("no existe el dato");
    }
  });
}
console.log(
  getUserInfo(1234).then((res) => {
    res;
  })
);
function getUserData(id) {
  let objeto = {};
  const p = new Promise((resolve, reject) => {
    getData().forEach((elemento) => {
      if (elemento.id === id) {
        objeto = elemento;
      }
    });

    if (objeto != null) {
      resolve(objeto);
    } else {
      reject("No existe");
    }
  });
  setTimeout(() => {
    p.then((res) => {
      res;
    }).catch((error) => {
      console.error(error);
    });
  });
  return objeto;
}

function getUserAge(dateString) {
  let hoy = new Date();
  let fechaNacimiento = new Date(dateString);
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();

  const p = new Promise((resolve, reject) => {
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--;
    }

    resolve(edad);
  });

  return edad;
}