// Paso 15: Clonar el primer <article> y ponerlo al final de <main>
const primerArticle = document.querySelector('article');
const clon = primerArticle.cloneNode(true);
const main = document.querySelector('main');
main.appendChild(clon);
