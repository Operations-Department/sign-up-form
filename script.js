const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const errorMessage = document.getElementById('error-message');

function validatePassword () {
    if (password.value === confirmPassword.value) {
        confirmPassword.classList.remove('invalid');
        confirmPassword.classList.add('valid');
        errorMessage.textContent = '';
        
    } else {
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        errorMessage.textContent = 'Passwords do not match!';
    }
};

password.addEventListener('input', validatePassword);
passwordConfirm.addEventListener('input', validatePassword);