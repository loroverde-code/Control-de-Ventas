function analisisIA(){
  let ventas=getVentas();
  let tipos={};

  ventas.forEach(v=>{
    tipos[v.tipo]=(tipos[v.tipo]||0)+Number(v.ganancia);
  });

  let mejor=Object.keys(tipos).reduce((a,b)=>tipos[a]>tipos[b]?a:b);
  return `Tipo más rentable: ${mejor}`;
}
