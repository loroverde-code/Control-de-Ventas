function graficaMensual(canvasId, mes){
  let ventas = getVentas().filter(v=>v.fecha.startsWith(mes));
  let dias={};

  ventas.forEach(v=>{
    dias[v.fecha]=(dias[v.fecha]||0)+Number(v.total);
  });

  new Chart(document.getElementById(canvasId),{
    type:'bar',
    data:{
      labels:Object.keys(dias),
      datasets:[{label:'Ventas',data:Object.values(dias)}]
    }
  });
}
