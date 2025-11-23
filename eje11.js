// Paso 13: Seleccionar y eliminar el último <p>
const parrafos = document.querySelectorAll('p');
const ultimoParrafo = parrafos[parrafos.length - 1];
if (ultimoParrafo) {
  ultimoParrafo.parentNode.removeChild(ultimoParrafo);
}
