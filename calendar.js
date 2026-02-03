function ventasPorFecha(fecha){
  return getVentas().filter(v=>v.fecha===fecha);
}
