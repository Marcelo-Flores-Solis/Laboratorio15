// Paso 7: Mostrar en consola el texto de cada <li> de un <ul> por su id usando for...of
const ul = document.getElementById('miLista');
for (const li of ul.children) {
  console.log(li.textContent);
}
