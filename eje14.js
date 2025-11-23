// Paso 16: Mover el último <li> al principio del <ul>
const ul = document.querySelector('ul');
const ultimoLi = ul.lastElementChild;
if (ultimoLi) {
  ul.insertBefore(ultimoLi, ul.firstElementChild);
}
