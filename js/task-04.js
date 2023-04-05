const span = document.getElementById('value');
function add() {
    let aktualnaWartosc = Number(span.textContent);
    let nowaWartosc = aktualnaWartosc + 1;
    span.textContent = nowaWartosc;
  };
function minus() {
    let aktualnaWartosc = Number(span.textContent);
    let nowaWartosc = aktualnaWartosc - 1;
    span.textContent = nowaWartosc;
  };
  document.getElementById('decrementButton').addEventListener('click', minus);
  document.getElementById('incrementButton').addEventListener('click', add);