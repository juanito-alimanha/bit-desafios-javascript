/*5. Crear una función que reciba dos párametros, un nombre y un apellido y retorne
el nombre completo, primero el apellido y luego el nombre.*/

function presentacion (nombre, apellido){
return ` ${nombre} ${apellido} `;
}
let valorRetornado = presentacion ('Alberto','Gutierrez');
let valorDevuelto = presentacion('Juan','Aguirre');
console.log(valorRetornado);
console.log(valorDevuelto);