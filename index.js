var firstNameWarning = document.getElementById('firstname-warning');
var lastNameWarning = document.getElementById('lastname-warning');
var emailWarning = document.getElementById('email-warning');
var phoneWarning = document.getElementById('phone-warning');
var dobWarning = document.getElementById('dob-warning')
var passwordWarning = document.getElementById('password-warning');
var password2Warning = document.getElementById('password2-warning');
var submitError = document.getElementById('submit-error');


// The function validates the first name
function validatefirstName() {
  var name = document.getElementById('firstname').value;

  if (name.length == 0) {
    firstNameWarning.innerHTML = 'Firstname is required';
    document.getElementById('firstname').style.border = '1px solid red';
    return false;
  }

  firstNameWarning.innerHTML = '<i class="fas fa-check-circle"></i>';
  document.getElementById('firstname').style.border = '1px solid green';
  return true;
}

// The function validates the last name
function validatelastName() {
  var name = document.getElementById('lastname').value;

  if (name.length == 0) {
    lastNameWarning.innerHTML = 'Lastname is required';
    document.getElementById('lastname').style.border = '1px solid red';
    return false;
  }

  lastNameWarning.innerHTML = '<i class="fas fa-check-circle"></i>';
  document.getElementById('lastname').style.border = '1px solid green';
  return true;
}

//The function below validates the email address of the user
function validateEmail() {
  var Email = document.getElementById('email-address').value;

  if (Email.length == 0) {
    emailWarning.innerHTML = 'Email address is required';
    document.getElementById('email-address').style.border = '1px solid red';
    return false;
  }

  // if (!Email.match(/^[A-Za-z]\._\-[0-9]*[@] [A-Za-z]*[\.][a-z]{2,4}$/)) {
  //   emailWarning.innerHTML = 'Email is invalid';
  //   document.getElementById('email-address').style.border = '1px solid red';
  //   return false;
  // }

  emailWarning.innerHTML = '<i class="fas fa-check-circle"></i>';
  document.getElementById('email-address').style.border = '1px solid green';
  return true;
}

// the function below is the validator for phone number
function validatePhone() {
  var phoneNumber = document.getElementById('phone-number').value;

  if (phoneNumber.length == 0) {
     phoneWarning.innerHTML = 'Phone no is required';
    document.getElementById('phone-number').style.border = '1px solid red';
    return false;
  }

  if (phoneNumber.length !== 11) {
     phoneWarning.innerHTML = 'phone no should be 11 digits';
    document.getElementById('phone-number').style.border = '1px solid red';
    return false;
  }

  if (!phoneNumber.match(/^[0-9]{11}$/)) {
    phoneWarning.innerHTML = 'Only digits please';
    document.getElementById('phone-number').style.border = '1px solid red';
    return false;
  }

  phoneWarning.innerHTML = '<i class="fas fa-check-circle"></i>';
   document.getElementById('phone-number').style.border = '1px solid green';
   return true;
}

// The function below validates user password.
function validatePassword() {
  var passWord = document.getElementById('password').value;
  var passWord2 = document.getElementById('password2').value;

  const hasUppercase = /[A-Z]/.test(passWord);
  const hasLowercase = /[a-z]/.test(passWord);
  const hasNumber = /[0-9]/.test(passWord);
  const hasSpecialChar = /[!@#$%^&*]/.test(passWord);

  if (passWord.length == 0) {
    passwordWarning.innerHTML = 'Password is required';
    document.getElementById('password').style.border = '1px solid red';
    return false;
  }

  if (passWord.length < 8) {
    passwordWarning.innerHTML = 'Password must be atleast 8 character long';
    document.getElementById('password').style.border = '1px solid red';
    return false;
  }
  
  if (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) {
    passwordWarning.innerHTML = 'Password must contain capital, small letter, number and special character';
    document.getElementById('password').style.border = '1px solid red';
    return false;
  }

  passwordWarning.innerHTML = '<i class="fas fa-check-circle"></i>';
  document.getElementById('password').style.border = '1px solid green';


  if (passWord != passWord2) {
    password2Warning.innerHTML = 'Must be the same as first password'
    document.getElementById('password2').style.border = '1px solid red';
    return false;
  } else {
    password2Warning.innerHTML = '<i class="fas fa-check-circle"></i>';
    document.getElementById('password2').style.border = '1px solid green';
  }
}

function validateForm() {
  if (!validatefirstName() || !validatelastName() || !validateEmail() || !validatePhone() || !validatefirstPassword() || !validatesecondPassword()) {
    submitError.innerHTML = 'Please fix all error'
    document.getElementById('signup').style.border = '1px solid red'
      setTimeout(() => {
        submitError.style.display ='none';
        document.getElementById('signup').style.border = 'none';
  }, 3000);
    return false;
  }
}