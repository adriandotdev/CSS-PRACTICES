let modal = document.querySelector("#modal");
let modalBg = document.querySelector('#modal-bg');
let emailField = document.querySelector('input[type="email"]');
let passwordField = document.querySelector('input[type="password"]');
let btnLogin = document.querySelector('#btn-login');
let successAlert = document.querySelector('.registered-success');

modal.addEventListener('click', (e) => {
    e.stopPropagation();
});

modal.addEventListener('submit', (event) => {

    successAlert.classList.add('registered-success-show');
});

btnLogin.addEventListener('click', (e) => {

    let emailValidFormat = /\w+(@gmail.com|@yahoo.com)/;

    let passwordCharactersValid = /\W+/;
    let passwordValidFormat = /[\w+]{8,}/;

    if (!String(emailField.value).match(emailValidFormat)) {
        emailField.parentElement.parentElement.children[1].style.display = 'block';
        emailField.parentElement.parentElement.children[1].textContent = '*Email is incorrect. Valid email is youremail@gmail.com or youremail@yahoo.com';
    }

    if (!String(passwordField.value).match(passwordValidFormat) || String(passwordField.value).match(passwordCharactersValid)) {
        passwordField.parentElement.parentElement.children[1].style.display = 'block';
        passwordField.parentElement.parentElement.children[1].textContent = '*Password must be at least 8 characters long. Valid characters are alphanumeric such as letters, numbers and (_).';
    }
});

modalBg.addEventListener('click', (e) => {

    document.querySelector('#checkbox1').checked = false;
    document.querySelector('input[type="password"]').value = '';
});

document.querySelectorAll('.input-field').forEach(input => {

    console.log('WOW')
    input.addEventListener('blur', (e) => {

        if (e.currentTarget.value === '') {
            input.classList.add('on-blur');
            input.parentElement.parentElement.children[1].style.display = 'block';
            input.parentElement.parentElement.children[1].textContent = '*This is a required field.';
        }
        else {
            input.classList.remove('on-blur');
        }
    });
});

emailField.addEventListener('input', (e) => {

    emailField.parentElement.parentElement.children[1].style.display = 'none';
});

passwordField.addEventListener('input', (e) => {

    passwordField.parentElement.parentElement.children[1].style.display = 'none';
});

function CheckFormsValidity() {
let emailValidFormat = /\w+(@gmail.com|@yahoo.com)/;

    let passwordCharactersValid = /[\w+]/;
    let passwordValidFormat = /[\w+]{8,}/;

    if (!String(emailField.value).match(emailValidFormat)) {
        emailField.parentElement.parentElement.children[1].style.display = 'block';
        return false;
    }

    if (!String(passwordField.value).match(passwordValidFormat) || !String(passwordField.value).match(passwordCharactersValid)) {
        passwordField.parentElement.parentElement.children[1].style.display = 'block';
        passwordField.parentElement.parentElement.children[1].textContent = 'Password must be at least 8 characters long. Valid characters are alphanumeric such as letters, numbers and (_).';
        return false;
    }

    return true;
}