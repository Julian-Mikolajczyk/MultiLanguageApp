function validateForm() {

    const lessonInput = document.getElementById('lesson_id');
    const studentInput = document.getElementById('student_id');
    const checkboxInput = document.getElementById('isabsent')


    const errorLesson = document.getElementById('errorLesson');
    const errorStudent = document.getElementById('errorStudent');
    const errorcheckbox = document.getElementById('errorcheckbox');
    const errorsSummary = document.getElementById('errorsSummary');

    debugger;
    resetErrors([lessonInput, studentInput, checkboxInput], [errorLesson, errorStudent, errorcheckbox], errorsSummary);
    let valid = true;

    if (!checkDropbox(lessonInput.value)) {
        valid = false;
        lessonInput.classList.add("error-input");
        errorLesson.innerText = "Pole jest wymagane";
    }

    if (!checkDropbox(studentInput.value)) {
        valid = false;
        studentInput.classList.add("error-input");
        errorStudent.innerText = "Pole jest wymagane";
    }
    if (!checkRequired(checkboxInput.value)) {
        valid = false;
        checkboxInput.classList.add("error-input");
        errorcheckbox.innerText = "Pole musi być uzupełnione";
    }
    else if (!isbool(checkboxInput.value)) {
        valid = false;
        checkboxInput.classList.add("error-input");
        errorcheckbox.innerText = "Pole przyjmuje tylko wartość true lub false";
    }
    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    return valid;
}