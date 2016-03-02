$(document).ready(function() {

  // jQuery methods go here...
  $('#home').on('click', function() {
    hideElementByID('loginContainer');
    loadEmployees();
  });

  $('#login').on('click', function() {
    // body...
    removeElementByID('employeeTable');
    createLoginView();
  });

  $('#loginFormSubmit').click(function(event) {
    console.info("Handler for .submit() called.");
    event.preventDefault();
  });
});
