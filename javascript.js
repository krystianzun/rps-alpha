let theParent = document.querySelector("#symbol");
const txt = document.querySelector('p');

theParent.addEventListener("click", doSomething, false);

function doSomething(e) {
  if (e.target !== e.currentTarget) {
    let clickedItem = e.target.id;

    txt.textContent = 'The machine has started!';

  }
  e.stopPropagation(); 
}