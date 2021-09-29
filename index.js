function validateForm() {
  var e;
  if (document.registrationForm.name.value == '') {
    e = 'Name cannot be empty';
    document.getElementById('error').innerHTML = e;
    document.registrationForm.name.focus();
    return false;
  }
  if (
    document.registrationForm.phoneNo.value == '' ||
    isNaN(document.registrationForm.phoneNo.value) ||
    document.registrationForm.phoneNo.value.length != 10
  ) {
    e = 'Invalid Phone No.';
    document.getElementById('error').innerHTML = e;
    document.registrationForm.phoneNo.focus();
    return false;
  }
  var emailId = document.registrationForm.email.value;
  atIndex = emailId.indexOf('@');
  dotIndex = emailId.indexOf('.');
  if (
    document.registrationForm.email.value == '' ||
    atIndex < 1 ||
    dotIndex - atIndex < 2
  ) {
    e = 'Invalid Email Id';
    document.getElementById('error').innerHTML = e;
    document.registrationForm.email.focus();
    return false;
  }
  if (document.registrationForm.subject.value == 'none') {
    e = 'Please select your Subject';
    document.getElementById('error').innerHTML = e;
    document.registrationForm.subject.focus();
    return false;
  }
  window.alert('Form is Validated');
  return true;
}
