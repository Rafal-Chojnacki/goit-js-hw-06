function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.body
const changeColorButton = document.querySelector('.change-color')
const span = document.querySelector('.color')
changeColorButton.addEventListener('click', changeColor);
const color = getRandomHexColor()

function changeColor() {
const color = getRandomHexColor()
body.style.backgroundColor = color
span.textContent = color;
}