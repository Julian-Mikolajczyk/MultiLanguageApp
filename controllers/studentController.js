exports.showStudentList = (req, res, next) => {
    res.render('student/Students', { navLocation: 'student' });
}
exports.showAddStudentForm = (req, res, next) => {
    res.render('student/Student-Add-Form', { navLocation: 'student' });
}
exports.showStudentDetails = (req, res, next) => {
    res.render('student/Student-Details', { navLocation: 'student' });
}
exports.showStudentEdit = (req, res, next) => {
    res.render('student/Edit-Student-Table', { navLocation: 'student' });
}