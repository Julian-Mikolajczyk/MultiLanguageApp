function validateForm() {
    const firstNameInput = document.getElementById('firstname');
    const lastNameInput = document.getElementById('surname');
    const PESELInput = document.getElementById('PESEL');
    const emailInput = document.getElementById('email');


    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorPESEL = document.getElementById('errorPESEL');
    const errorEmail = document.getElementById('errorEmail');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([firstNameInput, lastNameInput, emailInput, PESELInput], [errorFirstName, errorLastName, errorEmail, errorPESEL], errorsSummary);
    let valid = true;

    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 100)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole powinno zawierać od 2 do 100 znaków";
    } else if (haveNumbers(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole nie powinno zawierać cyfr";

    } else if (haveSpecialCharacters(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole nie może zawierać znaków specjalnych";
    }
    //  else if (!isAlpha(firstNameInput.value)) {
    //     valid = false;
    //     firstNameInput.classList.add("error-input");
    //     errorFirstName.innerText = "Pole może składać się tylko ze znaków alfabetu angielskiego";
    // }

    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 100)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole powinno zawierać od 2 do 100 znaków";
    }
    else if (haveNumbers(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole nie powinno zawierać cyfr";
    }
    else if (haveSpecialCharacters(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole nie może zawierać znaków specjalnych";
    }
    // else if (!isAlpha(lastNameInput.value)) {
    //     valid = false;
    //     lastNameInput.classList.add("error-input");
    //     errorLastName.innerText = "Pole może składać się tylko ze znaków alfabetu angielskiego";
    // }
    if (!checkRequired(PESELInput.value)) {
        valid = false;
        PESELInput.classList.add("error-input");
        errorPESEL.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(PESELInput.value, 11, 11)) {
        valid = false;
        PESELInput.classList.add("error-input");
        errorPESEL.innerText = "Pole powinno zawierać 11 znaków";
    }
    else if (!isNumeric(PESELInput.value)) {
        valid = false;
        PESELInput.classList.add("error-input");
        errorPESEL.innerText = "Pole może składać się tylko z cyfr";
    }

    // else if (exist(PESELInput.value)) {
    //     valid = false;
    //     PESELInput.classList.add("error-input");
    //     errorPESEL.innerText = "Taki PESEL istnieje już w bazie danych";
    // }


    if (!checkRequired(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(emailInput.value, 5, 100)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać od 5 do 100 znaków";
    } else if (!checkEmail(emailInput.value)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać prawidłowy adres email";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    return valid;

}
