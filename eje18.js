// Paso 20: Crear un <ul> dinámico con varios <li> y <span> internos
const ul = document.createElement('ul');
const cantidadItems = 4; // Puedes cambiar el número de elementos

for (let i = 1; i <= cantidadItems; i++) {
  const li = document.createElement('li');
  li.textContent = `Elemento ${i} `;
  const span = document.createElement('span');
  span.textContent = 'Nivel interno';
  span.style.color = 'green';
  li.appendChild(span);
  ul.appendChild(li);
}

document.body.appendChild(ul);
