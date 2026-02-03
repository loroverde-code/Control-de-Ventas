self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open("ventas").then(c=>c.addAll(["./"]))
  );
});
