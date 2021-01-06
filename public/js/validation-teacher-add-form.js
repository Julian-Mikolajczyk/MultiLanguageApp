function validateForm() {
    const firstNameInput = document.getElementById('name');
    const lastNameInput = document.getElementById('surname');
    const salaryInput = document.getElementById('salary');
    const hireDateInput = document.getElementById('hiredate');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorSalary = document.getElementById('errorSalary');
    const errorDate = document.getElementById('errorDate');
    const errorsSummary = document.getElementById('errorsSummary');


    resetErrors([firstNameInput, lastNameInput, salaryInput, hireDateInput], [errorFirstName, errorLastName, errorSalary, errorDate], errorsSummary);
    let valid = true;


    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 100)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole powinno zawierać od 2 do 100 znaków";
    }
    else if (!isAlpha(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole może składać się tylko ze znaków alfabetu angielskiego";
    }

    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 100)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole powinno zawierać od 2 do 100 znaków";
    } else if (!isAlpha(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole może składać się tylko ze znaków alfabetu angielskiego";
    }

    if (!checkRequired(salaryInput.value)) {
        valid = false;
        salaryInput.classList.add("error-input");
        errorSalary.innerText = "Pole jest wymagane";
    } else if (!checkInteger(salaryInput.value)) {
        valid = false;
        salaryInput.classList.add("error-input");
        errorSalary.innerText = "Pole może być tylko liczbą";
    }

    if (!checkRequired(hireDateInput.value)) {
        valid = false;
        hireDateInput.classList.add("error-input");
        errorDate.innerText = "Pole jest wymagane";
    } else if (isDate(hireDateInput.value)) {
        valid = false;
        hireDateInput.classList.add("error-input");
        errorDate.innerText = "Pole powinno być datą";
    } else if (!dateAfter(hireDateInput.value)) {
        valid = false;
        hireDateInput.classList.add("error-input");
        errorDate.innerText = "Data nie może być późniejsza niż dzisiejsza";
    }
    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    return valid;
}