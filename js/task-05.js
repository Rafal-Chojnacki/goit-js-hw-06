const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");

textInput.addEventListener("input", (event) => {
    output.textContent = textInput.value === ""
        ? "Anonymus"
        : textInput.value;
});