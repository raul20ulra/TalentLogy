/*Crea una función llamada getData que simule una llamada a una API
 externa (por ejemplo, usando setTimeout) y devuelva una promesa que
  resuelva con un objeto de  datos */
function getData() {
  let datos = [
    {
      name: "carlos",
      age: 23,
      id: 4569,
    },
    {
      name: "julio",
      age: 50,
      id: 2870,
    },
  ];
  let promesa;
  setTimeout(() => {
    promesa = new Promise((resolve, reject) => {
      resolve(datos);
    });
    promesa.then((res) => {
      console.log(res);
    });
  }, 2000);
  return datos;
}

