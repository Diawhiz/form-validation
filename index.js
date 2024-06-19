// Get references to warning elements
var firstNameWarning = document.getElementById('firstname-warning');
var lastNameWarning = document.getElementById('lastname-warning');
var emailWarning = document.getElementById('email-warning');
var phoneWarning = document.getElementById('phone-warning');
var dobWarning = document.getElementById('dob-warning');
var passwordWarning = document.getElementById('password-warning');
var password2Warning = document.getElementById('password2-warning');
var submitError = document.getElementById('submit-error');
var showPassword = document.getElementById('eye');
var showPassword2 = document.getElementById('eye2');

// Validate the first name
function validateFirstName() {
    var name = document.getElementById('firstname').value;

    if (name.length === 0) {
        submitError.innerHTML = 'Firstname is required';
        document.getElementById('firstname').style.border = '1px solid red';
        return false;
    }
    firstNameWarning.innerHTML = '<i class="fa fa-check-circle fa-lg" aria-hidden="true"></i>';
    document.getElementById('firstname').style.border = '1px solid green';
    return true;
}

// Validate the last name
function validateLastName() {
    var name = document.getElementById('lastname').value;

    if (name.length === 0) {
        submitError.innerHTML = 'Lastname is required';
        document.getElementById('lastname').style.border = '1px solid red';
        return false;
    }
    lastNameWarning.innerHTML = '<i class="fa fa-check-circle fa-lg" aria-hidden="true"></i>';
    document.getElementById('lastname').style.border = '1px solid green';
    return true;
}

// Validate the email address
function validateEmail() {
    var email = document.getElementById('email-address').value;

    if (email.length === 0) {
        submitError.innerHTML = 'Email address is required';
        document.getElementById('email-address').style.border = '1px solid red';
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(emailPattern)) {
        submitError.innerHTML = 'Email is invalid';
        document.getElementById('email-address').style.border = '1px solid red';
        return false;
    }
    emailWarning.innerHTML = '<i class="fa fa-check-circle fa-lg" aria-hidden="true"></i>';
    document.getElementById('email-address').style.border = '1px solid green';
    return true;
}

// Validate the phone number
function validatePhone() {
    var phoneNumber = document.getElementById('phone-number').value;

    if (phoneNumber.length === 0) {
        submitError.innerHTML = 'Phone number is required';
        document.getElementById('phone-number').style.border = '1px solid red';
        return false;
    }

    if (phoneNumber.length !== 11) {
        submitError.innerHTML = 'Phone number should be 11 digits';
        document.getElementById('phone-number').style.border = '1px solid red';
        return false;
    }

    var phonePattern = /^[0-9]{11}$/;
    if (!phoneNumber.match(phonePattern)) {
        submitError.innerHTML = 'Only digits please';
        document.getElementById('phone-number').style.border = '1px solid red';
        return false;
    }
    phoneWarning.innerHTML = '<i class="fa fa-check-circle fa-lg" aria-hidden="true"></i>';
    document.getElementById('phone-number').style.border = '1px solid green';
    return true;
}

// Validate the password
function validatePassword() {
    var passwordInput = document.getElementById('password').value;
    var passwordInput2 = document.getElementById('password2').value;

    //The code below checks the code to contain sequences of character.
    const hasUppercase = /[A-Z]/.test(passwordInput);
    const hasLowercase = /[a-z]/.test(passwordInput);
    const hasNumber = /[0-9]/.test(passwordInput);
    const hasSpecialChar = /[!@#$%^&*]/.test(passwordInput);

    if (passwordInput.length === 0) {
        submitError.innerHTML = 'Password is required';
        document.getElementById('password').style.border = '1px solid red';
        return false;
    }

    if (passwordInput.length < 8) {
        submitError.innerHTML = 'Password must be at least 8 characters long';
        document.getElementById('password').style.border = '1px solid red';
        return false;
    }

    if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
        submitError.innerHTML = 'Password must contain uppercase, lowercase, number, and special character';
        document.getElementById('password').style.border = '1px solid red';
        return false;
    }
    passwordWarning.innerHTML = '<i class="fa fa-check-circle fa-lg" aria-hidden="true"></i>';
    document.getElementById('password').style.border = '1px solid green';

    if (passwordInput !== passwordInput2) {
        submitError.innerHTML = 'Passwords must match';
        document.getElementById('password2').style.border = '1px solid red';
        return false;
    } else {
        password2Warning.innerHTML = '<i class="fa fa-check-circle fa-lg" aria-hidden="true"></i>';
        document.getElementById('password2').style.border = '1px solid green';
    }
    return true;
}
    
showPassword.addEventListener('click', () => {
    var passwordInput = document.getElementById('password');
    var passwordInput2 = document.getElementById('password2');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Add this line to toggle visibility
        showPassword.innerHTML = '<i class="fa fa-eye-slash fa-lg" aria-hidden="true"></i>'; // Change icon to eye slash
    } else {
        passwordInput.type = 'password'; // Add this line to toggle visibility
        showPassword.innerHTML = '<i class="fa fa-eye fa-lg" aria-hidden="true"></i>'; // Change icon to eye
    }
});


showPassword2.addEventListener('click', () => {
    var passwordInput2 = document.getElementById('password2');

     if (passwordInput2.type === 'password') {
        passwordInput2.type = 'text'; // Add this line to toggle visibility
        showPassword2.innerHTML = '<i class="fa fa-eye-slash fa-lg" aria-hidden="true"></i>';
    } else {
        passwordInput2.type = 'password'; // Add this line to toggle visibility
        showPassword2.innerHTML = '<i class="fa fa-eye fa-lg" aria-hidden="true"></i>'; // Change icon to eye
    }
});


// Validate the date of birth (optional, but good to include)
function validateDOB() {
    var dob = document.getElementById('date-of-birth').value;

    if (dob.length === 0) {
        submitError.innerHTML = 'Date of birth is required';
        document.getElementById('date-of-birth').style.border = '1px solid red';
        return false;
    }
    dobWarning.innerHTML = '<i class="fa fa-check-circle fa-lg" aria-hidden="true"></i>';
    document.getElementById('date-of-birth').style.border = '1px solid green';
    return true;
}

// Validate the entire form
function validateForm() {
    if (!validateFirstName() || !validateLastName() || !validateEmail() || !validatePhone() || !validatePassword() || !validateDOB()) {
        submitError.innerHTML = 'Please fix all errors';
        submitError.style.display = 'block';
        document.getElementById('signup').style.border = '1px solid red';

        setTimeout(() => {
            submitError.style.display = 'none';
            document.getElementById('signup').style.border = 'none';
        }, 3000);

        return false;
    }
    return true;
}
