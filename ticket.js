function imprimirTicket(v){
  let w=window.open("","ticket","width=300");
  w.document.write(`
  <body>
  <h3>CONTROL DE VENTAS</h3>
  Fecha:${v.fecha}<br>
  Hora:${v.hora}<br>
  Tipo:${v.tipo}<br>
  Total:$${v.total}<br>
  Ganancia:$${v.ganancia}
  </body>`);
  w.print();
}
