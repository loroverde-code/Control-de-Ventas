function reporteDia(fecha){
  let ventas = getVentas().filter(v=>v.fecha===fecha);
  let total=0, ganancia=0;
  ventas.forEach(v=>{
    total += Number(v.total);
    ganancia += Number(v.ganancia);
  });
  return {ventas,total,ganancia};
}

function reporteMes(mes){
  let ventas = getVentas().filter(v=>v.fecha.startsWith(mes));
  let total=0, ganancia=0;
  ventas.forEach(v=>{
    total += Number(v.total);
    ganancia += Number(v.ganancia);
  });
  return {total,ganancia};
}
