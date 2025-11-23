// Paso 11: Crear <ul> con 5 <li> y agregarlo a <section>
const lista = document.createElement('ul');

for (let i = 1; i <= 5; i++) {
  const li = document.createElement('li');
  li.textContent = `Elemento ${i}`;
  lista.appendChild(li);
}

const seccion = document.getElementById('miSeccion');
seccion.appendChild(lista);
