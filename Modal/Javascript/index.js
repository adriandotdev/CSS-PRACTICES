// the actual modal.
let modal = document.querySelector("#modal");

// the parent of the modal that acts as a background or covers the entire screen.
let modalBg = document.querySelector('#modal-bg');

// the email textfield.
let emailField = document.querySelector('input[type="email"]');

// the password textfield.
let passwordField = document.querySelector('input[type="password"]');

// Signup Button
let btnSignup = document.querySelector('#btn-login');

// Alert box to be shown when the user succesfully registered.
let successAlert = document.querySelector('.registered-success');


modal.addEventListener('click', (e) => {
    e.stopPropagation(); // to stop triggering the parent 'click' event.
});

modal.addEventListener('submit', (event) => {

    successAlert.classList.add('registered-success-show');
});

btnSignup.addEventListener('click', (e) => {

    let emailValidFormat = /\w+(@gmail.com|@yahoo.com)/;

    let passwordCharactersValid = /\W+/;
    let passwordValidFormat = /[\w+]{8,}/;

    // Checks if the email field is valid based on the regex or pattern that specified to 'emailValidFormat'.
    if (!String(emailField.value).match(emailValidFormat)) {
        emailField.parentElement.parentElement.children[1].style.display = 'block';
        emailField.parentElement.parentElement.children[1].textContent = '*Email is incorrect. Valid email is youremail@gmail.com or youremail@yahoo.com';
    }

    // Checks if the password field is valid based on the reges or pattern that specified to
    // 'passwordCharactersValid' and 'passwordValidFormat'.
    if (!String(passwordField.value).match(passwordValidFormat) || String(passwordField.value).match(passwordCharactersValid)) {
        passwordField.parentElement.parentElement.children[1].style.display = 'block';
        passwordField.parentElement.parentElement.children[1].textContent = '*Password must be at least 8 characters long. Valid characters are alphanumeric such as letters, numbers and (_).';
    }
});

// If the user clicks outside the modal, then the modal will be closed.
modalBg.addEventListener('click', (e) => {

    document.querySelector('#checkbox1').checked = false;
    document.querySelector('input[type="password"]').value = '';
});

/** This will iterate to all input fields and add an event 'blur'
 * that triggers to show the error message if the user lose focus
 * to the input field.
 */
document.querySelectorAll('.input-field').forEach(input => {

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

// On Input Events
// This will trigger to hide again the error messages of both input fields if the user types again.
emailField.addEventListener('input', (e) => {

    emailField.parentElement.parentElement.children[1].style.display = 'none';
});

passwordField.addEventListener('input', (e) => {

    passwordField.parentElement.parentElement.children[1].style.display = 'none';
});