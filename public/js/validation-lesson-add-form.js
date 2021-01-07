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
    debugger;

    resetErrors([teacherNameInput, dateInput, startTimeInput, endTimeInput, topicInput, classroomNrInput],
        [errorTeacherName, errorDate, errorStartTime, errorEndTime, errorTopic, errorClassroomNr], errorsSummary);
    let valid = true;


    if (!checkDropbox(teacherNameInput.value)) {
        valid = false;
        teacherNameInput.classList.add("error-input");
        errorTeacherName.innerText = "Pole jest wymagane";
    }
    debugger;
    if (!checkDate(dateInput.value)) {
        valid = false;
        dateInput.classList.add("error-input");
        errorDate.innerText = "Pole jest wymagane";
    } else if (!dateAfter(dateInput.value)) {
        valid = false;
        dateInput.classList.add("error-input");
        errorDate.innerText = "Data nie może być późniejsza niż dzisiejsza";
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