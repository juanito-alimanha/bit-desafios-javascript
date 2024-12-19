/*14. Crear una función que reciba 1 número, imprimir si es negativo o si es
positivo o si es cero.*/

function comparar(n) {
  if (n < 0) {
      console.log("Tu numero es negativo.");
  } else if (n > 0) {
      console.log("Tu numero es positivo.");
  } if (n === 0) {
      console.log("Tu numero es cero.");
  }
}

comparar(0);