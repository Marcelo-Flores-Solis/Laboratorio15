// Paso 12: Reemplazar un <p> por un <div>
const parrafo = document.getElementById('parrafoAReemplazar');
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = "Párrafo reemplazado";
parrafo.parentNode.replaceChild(nuevoDiv, parrafo);
