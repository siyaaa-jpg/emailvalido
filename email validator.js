// email validator.js

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var resultCont = document.getElementById('resultCont');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the form from submitting the traditional way

        var emailInput = document.getElementById('username');
        var email = emailInput.value.trim();

        if (validateEmail(email)) {
            resultCont.innerHTML = "Email address is valid: " + email;
        } else {
            resultCont.innerHTML = "Please enter a valid email address.";
        }
    });

    function validateEmail(email) {
        // Your email validation logic (use a regular expression or an API call)
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
