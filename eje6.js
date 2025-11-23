// Paso 8: Cambiar color de fondo de cada <div> usando un array de colores
const colores = ['#FFD700', '#90EE90', '#87CEEB', '#FFB6C1', '#FFA500'];
const divs = document.querySelectorAll('div');
divs.forEach(function(div, indice) {
  div.style.backgroundColor = colores[indice % colores.length];
});
