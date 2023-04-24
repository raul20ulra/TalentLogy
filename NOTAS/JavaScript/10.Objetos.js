/*
--Objetos:
Los objetos son estructuras de datos que permiten agrupar datos 
relacionados y funciones que operan sobre esos datos. En JavaScript, 
los objetos se definen utilizando llaves {}.
*/
let persona = {
    nombre: "Juan",
    edad: 20,
    saludar: function() {
      console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
  };
  
  console.log(persona.nombre); // muestra "Juan"
  persona.saludar(); // muestra "Hola, mi nombre es Juan y tengo 20 años."
  