//Escribir un programa que dado un número entero positivo n, calcule la suma
// de la siguiente serie: 1 + 1/2 + 1/3 + 1/4 + 1/5 + … + 1/n




let dividendo = parseInt (prompt("digite el numero"))
  

    for (let divisor=1; divisor < dividendo; divisor++) {
    
    resultado = dividendo / divisor
    console.log("el calculo es:" + (resultado));
    }
   
  

