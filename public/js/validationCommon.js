
function resetErrors(inputs, errorTexts, errorInfo) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error-input");
    }
    for (let i = 0; i < errorTexts.length; i++) {
        errorTexts[i].innerText = "";
    }
    errorInfo.innerText = "";
}

function checkRequired(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    if (value === "") {
        return false;
    }
    return true;
}
function checkDropbox(value) {
    if (value == null || value == 0) {
        return false;
    }
    return true;
}
function checkInteger(value) {
    if (!Number.isInteger(Number(value))) {
        return false;
    }
    return true;
}
function checkDate(value) {
    if (!value) {
        return false;
    }

    const pattern = /(\d{4})-(\d{2})-(\d{2})/;

    return pattern.test(value);


}
function dateAfter(value) {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    let date = [year, month, day].join('-');
    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    if (!pattern.test(date)) {
        return false;
    }
    const valueDate = new Date(value);
    const compareToDate = new Date(d);
    if (valueDate.getTime() > compareToDate.getTime()) {
        return false;
    }
    return true;
}
function isbool(value) {
    if (value == "true" || value == "false") {
        return true;
    }
    return false;
}
function checkTextLengthRange(value, min, max) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const length = value.length;
    if (max && length > max) {
        return false;
    }
    if (min && length < min) {
        return false;
    }
    return true;
}
function checkEmail(value) {
    if (!value) {
        return false;
    }
    value = value.toString().trim();
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(value);
}
function isAlpha(value) {
    return /^[a-zA-Z() ]+$/.test(value);
}
function isNumeric(value) {
    return /^\d+$/.test(value);
}
// function exist(value) {
//     const Student = require('../../model/sequelize/Student');
//     let allStudents;
//     allStudents = Student.findAll();
//     for (let stud in allStudents) {
//         console.log(stud);
//     }

// }
