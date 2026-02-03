function getVentas(){
  return JSON.parse(localStorage.getItem("ventas") || "[]");
}

function saveVenta(v){
  let ventas = getVentas();
  ventas.push(v);
  localStorage.setItem("ventas", JSON.stringify(ventas));
}

function now(){
  let d = new Date();
  return {
    fecha: d.toISOString().slice(0,10),
    hora: d.toLocaleTimeString()
  };
}
