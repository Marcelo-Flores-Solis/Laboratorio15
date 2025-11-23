// Paso 10: Crear e insertar un <h3> antes del primer <p>
const primerParrafo = document.querySelector('p');
const nuevoH3 = document.createElement('h3');
nuevoH3.textContent = "Nuevo encabezado insertado con JS";
document.body.insertBefore(nuevoH3, primerParrafo);
