let counterValue = 0;
document.getElementById("decrementButton").addEventListener("click", counterValue => counterValue += 1),

document.getElementById("incrementButton").addEventListener("click", counterValue => counterValue -= 1),

console.log(counterValue)