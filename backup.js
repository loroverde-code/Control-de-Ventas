function exportarRespaldo(){
  let data={
    users:localStorage.getItem("users"),
    ventas:localStorage.getItem("ventas")
  };
  let blob=new Blob([JSON.stringify(data)],{type:"application/json"});
  let a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="respaldo.json";
  a.click();
}
