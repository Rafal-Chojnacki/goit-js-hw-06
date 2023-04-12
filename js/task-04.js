let counterValue = 0;
const span = document.querySelector('#value');
function add() {
    counterValue += 1;
    span.textContent = counterValue;
    console.log(counterValue)
  };
function minus() {
    counterValue -= 1;
    span.textContent = counterValue;
    console.log(counterValue)
  };
  document.querySelector('#decrementButton').addEventListener('click', minus);
  document.querySelector('#incrementButton').addEventListener('click', add);