// En un videoclub se ofrece la promoción de llevarse tres películas por el
// precio de las dos más baratas. Haga un programa que, dados los tres
// precios de las películas, determine la cantidad a pagar.

let peli1 = parseInt(prompt("precio de la primera pelicula"));
let peli2 = parseInt(prompt("precio de la segunda pelicula"));
let peli3 = parseInt(prompt("precio de la tercera pelicula"));

if(peli1 >peli2 && peli1 >peli3){
    console.log("Pagaras la cantidad de: "+ (peli2 + peli3));
}else if(peli2 > peli1 && peli2 > peli3){
    console.log("Pagaras la cantidad de: "+ (peli1 + peli3));
}else{
    console.log("Pagaras la cantidad de: "+ (peli1 + peli2));
}