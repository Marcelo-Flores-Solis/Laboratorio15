// Paso 18: Agrega data-index y lo muestra dentro de cada sección
const secciones = document.querySelectorAll('section');
secciones.forEach((section, idx) => {
  section.setAttribute('data-index', idx + 1);

// span 
  const span = document.createElement('span');
  span.textContent = ` (data-index: ${idx + 1})`;
  span.style.color = "red";
  section.appendChild(span);
});
