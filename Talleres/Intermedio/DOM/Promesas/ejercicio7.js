/*Crea una función llamada getWeather que tome una ciudad 
como argumento, y devuelva una promesa que resuelva con el
 objeto de tiempo actual para esa ciudad (puedes simular 
    la respuesta de una API externa usando getData) */
function getData() {
  let datos = [
    {
      city: "guajira",
      weather: "Soleado",
    },
    {
      city: "cucuta",
      weather: "lluvioso",
    },
  ];

  return datos;
}
function getWeather(city) {
  return new Promise((resolve, reject) => {
    let clima = getData().find((elemento) => {
      if (elemento.city == city) {
        return elemento.weather;
      }
    });

    if (clima != null) {
      resolve(clima.weather);
    } else {
      reject("la ciudad esta mal escrita o no existe");
    }
  });
}
city = "guajira";
getWeather(city)
  .then((res) => {
    console.log(`el clima en ${city} es ${res}`);
  })
  .catch((error) => {
    console.error(error);
  });
