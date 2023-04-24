/*Crea una función llamada translate que tome un texto
 y un idioma de destino como argumentos, y devuelva una 
 promesa que resuelva con el texto traducido al idioma 
 de destino (puedes simular la respuesta de una API externa usando getData) */
function getData() {
  const pais = [
    {
      palabra: "carro",
      destino: "ingles",
      traducion: "car",
    },
    {
      palabra: "computador",
      destino: "ingles",
      traducion: "computer",
    },
  ];
  return pais;
}
function translate(palabra, destino) {
  return new Promise((resolve, reject) => {
    let traduccion;

    getData().forEach((element) => {
      if (palabra == element.palabra && destino == element.destino) {
        traduccion = element.traducion;
      }
    });

    resolve(traduccion);
  });
}
translate("computador", "ingles").then((res) => {
  console.log(res);
});
