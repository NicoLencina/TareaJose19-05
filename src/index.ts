let primerComponente: number[] = new Array(6);
let segundoComponente: number[] = new Array(6);
let sumaArray: number[] = new Array(6);
//pido los valores del primer arreglo
for (let cantidad = 0; cantidad < 6; cantidad++) {
  primerComponente[cantidad] = Number(
    prompt(
      "PRIMER: Ingrese el " +
        (cantidad + 1) +
        " Numero. " +
        (cantidad + 1) +
        "/6."
    )
  );
}
//pido los valores del segundo arreglo
for (let cantidad = 0; cantidad < 6; cantidad++) {
  segundoComponente[cantidad] = Number(
    prompt(
      "SEGUNDO: Ingrese el " +
        (cantidad + 1) +
        " Numero. " +
        (cantidad + 1) +
        "/6."
    )
  );
}
//sumo los 2 arreglos por medio de un nuevo for y los guardo en Sumaarray
for (let suma = 0; suma < 6; suma++) {
  sumaArray[suma] = primerComponente[suma] + segundoComponente[suma];
}
//Imprimo por consola el resultado
console.log("La Suma de los 2 arreglo es: " + sumaArray);
console.log("El Primer arrglo ingresado es: " + primerComponente);
console.log("El Segundo arrglo ingresado es: " + segundoComponente);
