var firstNameWarning = document.getElementById('firstname-warning');
var lastNameWarning = document.getElementById('lastname-warning');
var emailWarning = document.getElementById('email-warning');
var phoneWarning = document.getElementById('phone-warning');
var dobWarning = document.getElementById('dob-warning')
var passwordWarning = document.getElementById('password-warning');
var password2Warning = document.getElementById('password2-warning');
var submitError = document.getElementById('submit-error');


function validatefirstName() {
  var name = document.getElementById('firstname').value;

  if (name.length == 0) {
    firstNameWarning.innerHTML = 'Firstname is required';
    document.getElementById('firstname').style.border = '1px solid red';
    return false;
  }

  document.getElementById('firstname').style.border = '1px solid green';
  return true;
}

function validatelastName() {
  var name = document.getElementById('lastname').value;

  if (name.length == 0) {
    lastNameWarning.innerHTML = 'Lastname is required';
    document.getElementById('lastname').style.border = '1px solid red';
    return false;
  }

  document.getElementById('lastname').style.border = '1px solid green';
  return true;
}

// the function below is the validator for phone number
function validatePhone() {
  var phoneNumber = document.getElementById('phone-number');

  if (phoneNumber == 0) {
     phoneWarning.innerHTML = 'Please enter phone number';
    document.getElementById('phone-number').style.border = '1px solid red';
    return false;
  }

  if (!phoneNumber.match(/^[0-9]*{11}$/)) {
    phoneWarning.innerHTML = 'Phone number must be 11 digits';
    document.getElementById('phone-number').style.border = '1px solid red';
    return false;
  }

   document.getElementById('phone-number').style.border = '1px solid green';
   return true;
}

// The function below validates user password.
function validatefirstPassword() {
  var passWord = document.getElementById('password').value;

  if (passWord.length == 0) {
    passwordWarning.innerHTML = 'Please enter your password';
    document.getElementById('password').style.border = '1px solid red';
    return false;
  }

  if (passWord.length <= 7) {
    passwordWarning.innerHTML = 'Password must be atleast 8 character long';
    document.getElementById('password').style.border = '1px solid red';
    return false;
  }

  // if (!passWord.match(/^[A-Za-z]\._\-[0-9]{2, 4}$/)) {
  //   passwordWarning.innerHTML = 'Password must contain letter, symbol & number';
  //   document.getElementById('password').style.border = '1px solid red';
  //   return false;
  // }

  document.getElementById('password').style.border = '1px solid green';
    return true;
}

function validatesecondPassword() {
  var passWord2 = document.getElementById('password2').value;

  if (passWord2 != validatefirstPassword()) {
    password2Warning.innerHTML = 'Must be the same as first password'
    document.getElementById('password2').style.border = '1px solid red';
    return false;
  } 
    document.getElementById('password2').style.border = '1px solid green';
    return true;
}