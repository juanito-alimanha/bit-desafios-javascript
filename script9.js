/*9. - Crear seis funciones, (suma, resta, multiplica, divide, módulo, potencia),
cada función debe recibir 2 números y retornar un resultado según corresponda.
  - Crear otra función que reciba el nombre de la operación y 2 números,
debe imprimir el resultado.
*/

function sumar(a, b){
  return a+b;
}
function restar(a, b){
  return a-b;
}
function multiplicar(a, b){
  return a*b;
}
function dividir(a, b){
  return a/b;
}
function modular(a, b){
  return a%b;
}
function potenciar(a, b){
  return a%b;
}

function operar(operacion , a, b){
  let resultado;

if (operacion === 'suma') {
  resultado = sumar(a, b);
  console.log(`${a} + ${b} = ${resultado}`);
}
if (operacion === 'resta') {
  resultado = restar(a, b);
  console.log(`${a} - ${b} = ${resultado}`);
}
if (operacion === 'multiplicacion') {
  resultado = multiplicar(a, b);
  console.log(`${a} * ${b} = ${resultado}`);
}
if (operacion === 'division') {
  resultado = dividir(a, b);
  console.log(`${a} / ${b} = ${resultado}`);
}
if (operacion === 'modulacion') {
  resultado = modular(a, b);
  console.log(`${a} % ${b} = ${resultado}`);
}
if (operacion === 'potencia') {
  resultado = potenciar(a, b);
  console.log(`${a} ** ${b} = ${resultado}`);
}
}

operar('suma', 9, 3);
operar('resta', 9, 3);
operar('multiplicacion', 9, 3);
operar('division', 9, 3);
operar('modulacion', 9, 3);
operar('potencia', 9, 3);