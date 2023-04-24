/*Crea una función llamada getUserData que tome un ID de 
usuario como argumento y devuelva una promesa que resuelva 
con el objeto de datos del usuario con ese ID (puedes simular 
la respuesta de una API externa usando getData)*/
function getUserData(id) {
    return new Promise((resolve, reject) => {
      let objeto;
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
  }
  getUserData(8920)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
  