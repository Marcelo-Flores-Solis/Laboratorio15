// Paso 19: Contar la cantidad de <div> y mostrar el resultado en un <p> dinámico
const cantidadDivs = document.querySelectorAll('div').length;
const p = document.createElement('p');
p.textContent = `Cantidad de <div>: ${cantidadDivs}`;
document.body.appendChild(p);
