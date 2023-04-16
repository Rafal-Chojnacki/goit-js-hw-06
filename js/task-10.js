function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divOfBoxes = document.querySelector('#boxes')
const numberOfBoxes = document.querySelector('[type=number]');

function getValue() {
  const amount = numberOfBoxes.value;
  return amount;
}
const create = document.querySelector('[data-create]');
create.addEventListener('click' , createButtonClick);

function createButtonClick() {
  const amount = getValue();
  createBoxes(amount);
}
let size = 30;
function createBoxes(amount) {
  for (let i=0; i<amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = div.style.width;
    div.style.backgroundColor = getRandomHexColor();
    divOfBoxes.insertAdjacentElement('beforeend', div);

    size += 10;  
  }
}
const destroy = document.querySelector('[data-destroy]');
destroy.addEventListener('click' , destroyButtonClick);

function destroyButtonClick() {
  destroyBoxes();
}

function destroyBoxes() {
      while (divOfBoxes.firstChild) {
          divOfBoxes.removeChild(divOfBoxes.firstChild);
      }
      size = 30;
  }

