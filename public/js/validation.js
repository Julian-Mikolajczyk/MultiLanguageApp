// function resetErrors(inputs, errorTexts, errorInfo) {
//     for (let i = 0; i < inputs.length; i++) {
//         inputs[i].classList.remove("error_input");
//     }
//     for (let i = 0; i < errorTexts.length; i++) {
//         errorTexts[i].innerText = "";
//     }
//     errorInfo.innerText = "";
// }

// function checkRequired(value) {
//     if (!value) {
//         return false;
//     }
//     value = value.toString().trim();
//     if (value === "") {
//         return false;
//     }
//     return true;
// }
// function checkTextLengthRange(value, min, max) {
//     if (!value) {
//         return false;
//     }
//     value = value.toString().trim();
//     const length = value.length;
//     if (max && length > max) {
//         return false;
//     }
//     if (min && length < min) {
//         return false;
//     }
//     return true;
// }
// function checkEmail(value) {
//     if (!value) {
//         return false;
//     }
//     value = value.toString().trim();
//     const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     return re.test(value);
// }
// function insertAfter(refNode, newNode) {
//     refNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
// }


// function validateForm() {
//     debugger;
//     const requiredFields = document.querySelectorAll('.required');
//     const lengthFields = document.querySelectorAll('.length');

//     // resetErrors();
//     let valid = true;

//     for (i = 0; i < requiredFields.length; i++) {
//         if (!checkRequired(requiredFields[i].value)) {
//             valid = false;
//             requiredFields[i].classList.add('error-input')
//             let span = document.createElement('span');
//             // span.classList.add('error');
//             span.innerHTML = 'Pole jest wymagane';
//             insert(requiredFields[i], span);
//         }
//     }

//     for (i = 0; i < lengthFields.length; i++) {
//         let max = 200;
//         switch (lengthFields[i].id) {
//             case 'PESEL':
//                 max = 11;
//                 break;
//             case 'firstName':
//                 max = 100;
//                 break;
//             case 'lastName':
//                 max = 100;
//                 break;
//             default:
//                 max = 50;
//                 break;
//         }
//         if (!checkLength(lengthFields[i].value, 2, max)) {
//             valid = false;
//             lengthFields[i].classList.add('error-input')
//             let span = document.createElement('span');
//             // span.classList.add('error');
//             span.innerHTML = 'This fields length is out of range';
//             insert(lengthFields[i], span);
//         }
//     }
//     return valid;




// }