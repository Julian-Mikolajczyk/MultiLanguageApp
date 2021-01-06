const teacherRepository = require('../repository/sequelize/TeacherRepository');

exports.showTeacherList = (req, res, next) => {
    teacherRepository.getTeachers()
        .then(teachs => {
            res.render('teacher/Teachers', {
                teachs: teachs,
                navLocation: 'teacher'
            });
        });
}
exports.showAddTeacherForm = (req, res, next) => {
    res.render('teacher/form', {
        teach: {},
        pageTitle: 'Add New Teacher',
        formMode: 'createNew',
        btnLabel: 'Add',
        formAction: '/teachers/add',
        navLocation: 'teacher'
    });
}
exports.showTeacherDetails = (req, res, next) => {
    const teacherId = req.params.teacherId;
    teacherRepository.getTeacherById(teacherId)
        .then(teach => {
            res.render('teacher/Form', {
                teach: teach,
                formMode: 'showDetails',
                pageTitle: 'Teacher Details',
                formAction: '',
                navLocation: 'teacher'
            });
        });
}
exports.showTeacherEdit = (req, res, next) => {
    const teacherId = req.params.teacherId;
    teacherRepository.getTeacherById(teacherId)
        .then(teach => {
            res.render('teacher/Form', {
                teach: teach,
                formMode: 'edit',
                pageTitle: 'Edit Teacher',
                btnLabel: 'Edit',
                formAction: '/teachers/edit',
                navLocation: 'teacher'
            });
        });
}
exports.addTeacher = (req, res, next) => {
    const teachData = { ...req.body };
    teacherRepository.createTeacher(teachData)
        .then(result => {
            res.redirect('/teachers');
        });
};
exports.updateTeacher = (req, res, next) => {
    const teachId = req.body._id;
    const teachData = { ...req.body };
    teacherRepository.updateTeacher(teachId, teachData)
        .then(result => {
            res.redirect('/teachers');
        });
};
exports.deleteTeacher = (req, res, next) => {
    const teacherId = req.params.teacherId;
    teacherRepository.deleteTeacher(teacherId)
        .then(() => {
            res.redirect('/teachers');
        });
};