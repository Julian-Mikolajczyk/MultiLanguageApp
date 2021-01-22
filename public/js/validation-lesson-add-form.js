function validateForm() {
    const teacherNameInput = document.getElementById('teacher_id');
    const dateInput = document.getElementById('date');
    const startTimeInput = document.getElementById('starttime');
    const endTimeInput = document.getElementById('endtime');
    const topicInput = document.getElementById('topic');
    const classroomNrInput = document.getElementById('classroomnr');


    const errorTeacherName = document.getElementById('errorTeacherName');
    const errorDate = document.getElementById('errorDate');
    const errorStartTime = document.getElementById('errorStartTime');
    const errorEndTime = document.getElementById('errorEndTime');
    const errorTopic = document.getElementById('errorTopic');
    const errorClassroomNr = document.getElementById('errorClassroomNr');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([teacherNameInput, dateInput, startTimeInput, endTimeInput, topicInput, classroomNrInput],
        [errorTeacherName, errorDate, errorStartTime, errorEndTime, errorTopic, errorClassroomNr], errorsSummary);
    let valid = true;


    if (!checkDropbox(teacherNameInput.value)) {
        valid = false;
        teacherNameInput.classList.add("error-input");
        errorTeacherName.innerText = "Pole jest wymagane";
    }
    if (!checkDate(dateInput.value)) {
        valid = false;
        dateInput.classList.add("error-input");
        errorDate.innerText = "Pole jest wymagane";
    }
    if (!checkDropbox(startTimeInput.value)) {
        valid = false;
        startTimeInput.classList.add("error-input");
        errorStartTime.innerText = "Pole jest wymagane";
    }

    if (!isTime(startTimeInput.value)) {
        valid = false;
        startTimeInput.classList.add("error-input");
        errorStartTime.innerText = "Pole powinno być w formacie hh:mm";
    }
    if (startTimeBiggerThanEndTime(startTimeInput.value, endTimeInput.value)) {
        valid = false;
        startTimeInput.classList.add("error-input");
        errorStartTime.innerText = "Pole powinno zawierać czas wcześniejszy niż czas zakończenia lekcji";
    }
    if (!checkDropbox(endTimeInput.value)) {
        valid = false;
        endTimeInput.classList.add("error-input");
        errorEndTime.innerText = "Pole jest wymagane";
    }
    if (!isTime(endTimeInput.value)) {
        valid = false;
        endTimeInput.classList.add("error-input");
        errorEndTime.innerText = "Pole powinno być w formacie hh:mm";
    }
    debugger;
    if (!endTimeBiggerThanStartTime(startTimeInput.value, endTimeInput.value)) {
        valid = false;
        endTimeInput.classList.add("error-input");
        errorEndTime.innerText = "Pole powinno zawierać czas późniejszy niż czas rozpoczęcia lekcji";
    }
    if (!checkRequired(topicInput.value)) {
        valid = false;
        topicInput.classList.add("error-input");
        errorTopic.innerText = "Pole jest wymagane";
    }
    if (!checkDropbox(classroomNrInput.value)) {
        valid = false;
        classroomNrInput.classList.add("error-input");
        errorClassroomNr.innerText = "Pole jest wymagane";
    }
    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    return valid;
}