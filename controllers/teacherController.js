exports.showTeacherList = (req, res, next) => {
    res.render('teacher/Teachers', { navLocation: 'teacher' });
}
exports.showAddTeacherForm = (req, res, next) => {
    res.render('teacher/Teacher-Add-Form', { navLocation: 'teacher' });
}
exports.showTeacherDetails = (req, res, next) => {
    res.render('teacher/Teacher-Details', { navLocation: 'teacher' });
}
exports.showTeacherEdit = (req, res, next) => {
    res.render('teacher/Edit-Teacher-Table', { navLocation: 'teacher' });
}