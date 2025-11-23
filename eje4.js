// Paso 6: Agregar clase "resaltado" y quitar "oculto" en <li>
const elementosLi = document.querySelectorAll('li');
elementosLi.forEach(function(li) {
  li.classList.add('resaltado');
  if (li.classList.contains('oculto')) {
    li.classList.remove('oculto');
  }
});
