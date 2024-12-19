/* 6. crear una funcion que recibacuatro parametros, un nombre, una prenda,
un color y una cantidad y retorne pepita tiene 2 camisas de color azul.*/

function ropa (nombre, prenda, cantidad, color){
  return ` ${nombre} tiene ${prenda} ${cantidad} de color ${color} `;
  }
  let valorRetornado = ropa ('Pepita','2','camisas','azul');

  console.log(valorRetornado);