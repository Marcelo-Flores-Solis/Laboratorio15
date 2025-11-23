// Paso 4: Cambiar el contenido de todos los <p>
const parrafos = document.querySelectorAll('p');
parrafos.forEach(function(p) {
  p.textContent = "Texto actualizado dinámicamente";
});
