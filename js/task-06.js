const input = document.querySelector('#validation-input');
input.addEventListener('blur', () => input.value.length >= 6 ? input.classList.add('valid') : input.classList.add('invalid')
);