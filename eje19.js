// Paso 21: Crear 3 <p> dentro de #contenedor y eliminar el segundo
const contenedor = document.getElementById('contenedor');
const btnCrear = document.getElementById('crearParrafos');
const btnEliminar = document.getElementById('eliminarSegundo');

btnCrear.addEventListener('click', function() {
  contenedor.innerHTML = ''; 
  for (let i = 1; i <= 3; i++) {
    const p = document.createElement('p');
    p.textContent = `Párrafo ${i}`;
    contenedor.appendChild(p);
  }
});

btnEliminar.addEventListener('click', function() {
  const parrafos = contenedor.querySelectorAll('p');
  if (parrafos[1]) {
    contenedor.removeChild(parrafos[1]);
  }
});
