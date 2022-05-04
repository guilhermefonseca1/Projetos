const tabuleiro = document.querySelector('#tabuleiro');
const buttons = document.querySelectorAll('.buttonChange');
console.log(buttons);

function changeSelector(event) {
   const selected = document.querySelector('.selected');
   selected.classList.remove('selected');
   event.target.classList.add('selected');

}


for (let btn of buttons) {
   btn.addEventListener('click', changeSelector)
}

function writeText(event) {
   const currentSelected = document.querySelector('.selected');
   event.target.innerText = currentSelected.innerText;
}

function createBoard(size) {
   for (let index = 0; index < size * size; index += 1) {
      const newDiv = document.createElement('div');
      newDiv.className = 'divBoard';
      newDiv.addEventListener('click', writeText);
      tabuleiro.appendChild(newDiv);
   }
}
createBoard(3);