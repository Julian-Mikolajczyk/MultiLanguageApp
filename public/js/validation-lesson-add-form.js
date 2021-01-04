function validateForm() {
    const teacherNameInput = document.getElementById('TeacherName');
    const dateInput = document.getElementById('Date');
    const startTimeInput = document.getElementById('StartTime');
    const endTimeInput = document.getElementById('EndTime');
    const topicInput = document.getElementById('Topic');
    const classroomNrInput = document.getElementById('ClassroomNr');


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
    if (!checkDropbox(endTimeInput.value)) {
        valid = false;
        endTimeInput.classList.add("error-input");
        errorEndTime.innerText = "Pole jest wymagane";
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