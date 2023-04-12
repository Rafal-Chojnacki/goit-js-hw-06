const input = document.querySelector('#validation-input');
input.addEventListener('blur', () => input.value.length >= 6 ? input.style.borderColor = '#4CAF50' : input.style.borderColor = '#F44336'
);