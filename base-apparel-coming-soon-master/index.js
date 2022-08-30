var emailInput = document.querySelector(".email-section input");
var errorIcon = document.querySelector(".email-section .error-icon");
var errorText = document.querySelector(".error-text");


function validateEmail() {
    //here checkValidity is built in attribute of the input type email, it returns a boolean value based on the pattern of the inputted value
    if (!emailInput.checkValidity()) {
        errorIcon.classList.remove("invisible");
        errorText.classList.remove("invisible");
    }
    else {
        errorIcon.classList.add("invisible");
        errorText.classList.add("invisible");
    }
}

//when ever a user types inside the form field  (email input)

emailInput.addEventListener("input", validateEmail);


//when the input is not foucused i.e not clicked for inputting
emailInput.addEventListener("focusout", function () {
    errorIcon.classList.add("invisible");
    errorText.classList.add("invisible");
});