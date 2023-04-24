/*Crea una función llamada getDirections que tome un origen 
y un destino como argumentos, y devuelva una promesa que 
resuelva con un objeto de instrucciones de navegación 
(puedes simular la respuesta de una API externa usando getData)*/

function getData() {
    let datos = [
      {
        origen:"calle 12 av 14",
        destino:"calle 15 av 14",
        navegacion:"avanza 3 calles",
      },
      {
        origen:"calle 8 av 11",
        destino:"calle 2 av 25",
        navegacion:"avanza 6 calles y cruza a la izquierda",
      }
    ];
    return datos;
  }
    function getDirections(origen, destino) {
    return new Promise((resolve, reject) => {
      getData().forEach((element) => {
        if (element.origen === origen && element.destino === destino) {
          resolve(element.navegacion);
        } else {
          reject("no existe esta direccion");
        }
      });
    });
  }
  getDirections("calle 12 av 14","calle 15 av 14")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });