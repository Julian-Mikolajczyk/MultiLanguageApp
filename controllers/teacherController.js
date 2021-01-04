exports.showTeacherList = (req, res, next) => {
    res.render('student/Students', { navLocation: 'student' });
}
exports.showAddTeacherForm = (req, res, next) => {
    res.render('student/Student-Add-Form', { navLocation: 'student' });
}
exports.showTeacherDetails = (req, res, next) => {
    res.render('student/Student-Details', { navLocation: 'student' });
}
exports.showTeacherEdit = (req, res, next) => {
    res.render('student/Edit-Student-Table', { navLocation: 'student' });
}