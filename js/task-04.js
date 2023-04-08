let counterValue = 0;
const span = document.getElementById('value');
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
  document.getElementById('decrementButton').addEventListener('click', minus);
  document.getElementById('incrementButton').addEventListener('click', add);