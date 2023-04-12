const input = document.querySelector('#validation-input');
input.addEventListener('blur', function() {
    const inputValueLength = input.value.length;
    
    if (inputValueLength >= 6) {
      input.style.borderColor = '#4CAF50';
    } else {
      input.style.borderColor = '#F44336';
    }
});