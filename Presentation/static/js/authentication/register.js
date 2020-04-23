let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let submitButton = document.getElementById("form-button")

let usernameInvalidFeedback = document.getElementsByClassName("invalid-feedback")[0]
let emailInvalidFeedback = document.getElementsByClassName("invalid-feedback")[1]
let passwordInvalidFeedback = document.getElementsByClassName("invalid-feedback")[2]

let usernameIsValid = false;
let emailIsValid = false;
let passwordIsValid = false;

function modifyInvalidFeedbackMessage(invalidFeedback, message){
    invalidFeedback.innerHTML = message;
}

username.addEventListener("keyup", function(){
    this.classList.remove("is-invalid");
    this.classList.remove("is-valid");
    usernameIsValid = false;

    if ( this.value.length === 0 ){
        modifyInvalidFeedbackMessage(usernameInvalidFeedback, "Campul username nu poate fi gol!");
        this.classList.add("is-invalid");
    }
    else if ( this.value.length < 3 || this.value.length > 30 ){
        modifyInvalidFeedbackMessage(usernameInvalidFeedback, "Campul trebuie sa contina intre 3 si 30 de caractere!");
        this.classList.add("is-invalid");
    }
    else if ( !this.value.replace(/\s/g, '').length )
    {
        modifyInvalidFeedbackMessage(usernameInvalidFeedback, "Campul nu poate contine doar spatii!");
        this.classList.add("is-invalid");
    }
    else{
        this.classList.add("is-valid");
        usernameIsValid = true;
    }

    verifyInputs();
});

function verifyInputs(){
    if ( usernameIsValid === true )
        submitButton.disabled = false;
    else{
        submitButton.disabled = true;
    }
}