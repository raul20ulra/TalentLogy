/*Crea una función llamada getUsers que devuelva una promesa que resuelva
 con una lista de objetos de usuarios (puedes simular la respuesta de una
    API externa usando getData) */
    function getData() {
      let datos = [
        {
          name: "julio",
          age: 60,
          id: 2550,
        },
        {
          name: "carlos",
          age: 39,
          id: 1288,
        },
      ];
    
      return datos;
    }
    
    function getUser() {
      return  new Promise((resolve, reject) => {
        resolve(getData());
      });
    
      promesa.then((res) => {
        console.log(res);
      });
    }
    
    getUser().then(res=>{
      console.log(res);
    })