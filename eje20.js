// Paso 22: Añadir h2, p, lista y eliminar el h2 original
const seccion = document.getElementById('miSeccion');
const btnModificar = document.getElementById('modificarSeccion');

btnModificar.addEventListener('click', function() {
  // Eliminar h2 original si existe
  const h2Original = seccion.querySelector('h2');
  if (h2Original) { seccion.removeChild(h2Original); }
  
  // Nuevo h2
  const nuevoH2 = document.createElement('h2');
  nuevoH2.textContent = 'Título nuevo';
  seccion.appendChild(nuevoH2);
  // Nuevo p
  const nuevoP = document.createElement('p');
  nuevoP.textContent = 'Descripción generada';
  seccion.appendChild(nuevoP);
  // Nueva lista
  const ul = document.createElement('ul');
  for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Ítem ${i}`;
    ul.appendChild(li);
  }
  seccion.appendChild(ul);
});
