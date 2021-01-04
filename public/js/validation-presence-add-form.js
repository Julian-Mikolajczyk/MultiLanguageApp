function validateForm() {
    const lessonInput = document.getElementById('Topic');
    const studentInput = document.getElementById('StudentID');


    const errorLesson = document.getElementById('errorLesson');
    const errorStudent = document.getElementById('errorStudent');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([lessonInput, studentInput], [errorLesson, errorStudent], errorsSummary);
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
    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    return valid;
}