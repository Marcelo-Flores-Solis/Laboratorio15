// Paso 17: Ordenar los <p> dentro del #contenedor alfabéticamente
const contenedor = document.getElementById('contenedor');
const parrafos = Array.from(contenedor.querySelectorAll('p'));
parrafos.sort((a, b) => a.textContent.localeCompare(b.textContent));
parrafos.forEach(p => contenedor.appendChild(p));
