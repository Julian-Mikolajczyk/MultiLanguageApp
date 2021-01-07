const teacherRepository = require('../repository/sequelize/TeacherRepository');
const tmpErr = {
    errors: [
        { path: [""] }
    ]
}

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
        navLocation: 'teacher',
        validationErrors: tmpErr.errors
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
                navLocation: 'teacher',
                validationErrors: tmpErr.errors
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
                navLocation: 'teacher',
                validationErrors: tmpErr.errors
            });
        });
}
exports.addTeacher = (req, res, next) => {
    const teachData = { ...req.body };
    teacherRepository.createTeacher(teachData)
        .then(result => {
            res.redirect('/teachers');
        })
        .catch(err => {
            res.render('teacher/form', {
                teach: teachData,
                pageTitle: 'Add New Teacher',
                formMode: 'createNew',
                btnLabel: 'Add',
                formAction: '/teachers/add',
                navLocation: 'teacher',
                validationErrors: err.errors
            });
        });
};
exports.updateTeacher = (req, res, next) => {
    const teachId = req.body._id;
    const teachData = { ...req.body };
    teacherRepository.updateTeacher(teachId, teachData)
        .then(result => {
            res.redirect('/teachers');
        }).catch(err => {
            res.render('teacher/form', {
                teach: teachData,
                formMode: 'edit',
                pageTitle: 'Edit Teacher',
                btnLabel: 'Edit',
                formAction: '/teachers/edit',
                navLocation: 'teacher',
                validationErrors: err.errors
            });
        });
};
exports.deleteTeacher = (req, res, next) => {
    const teacherId = req.params.teacherId;
    teacherRepository.deleteTeacher(teacherId)
        .then(() => {
            res.redirect('/teachers');
        });
};