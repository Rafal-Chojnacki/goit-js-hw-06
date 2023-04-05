let counterValue = 0;
const span = document.getElementById('value');
function add() {
    let counterValue = Number(span.textContent);
    let newCounterValue = counterValue + 1;
    span.textContent = newCounterValue;
  };
function minus() {
    let counterValue = Number(span.textContent);
    let newCounterValue = counterValue - 1;
    span.textContent = newCounterValue;
  };
  document.getElementById('decrementButton').addEventListener('click', minus);
  document.getElementById('incrementButton').addEventListener('click', add);