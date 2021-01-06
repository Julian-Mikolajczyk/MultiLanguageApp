const StudentRepository = require('../repository/sequelize/StudentRepository');

exports.showStudentList = (req, res, next) => {
    StudentRepository.getStudents()
        .then(studs => {
            res.render('student/Students', {
                studs: studs,
                navLocation: 'student'
            });
        });
}
exports.showAddStudentForm = (req, res, next) => {
    res.render('student/form', {
        stud: {},
        pageTitle: 'Add New Student',
        formMode: 'createNew',
        btnLabel: 'Add',
        formAction: '/students/add',
        navLocation: 'student'
    });
}
exports.showStudentDetails = (req, res, next) => {
    // console.log("jestem");
    // console.log(req);
    const studentId = req.params.studentId;
    StudentRepository.getStudentById(studentId)
        .then(stud => {
            res.render('student/Form', {
                stud: stud,
                formMode: 'showDetails',
                pageTitle: 'Student Details',
                formAction: '',
                navLocation: 'student'
            });
        });
}
exports.showStudentEdit = (req, res, next) => {
    const studentId = req.params.studentId;
    StudentRepository.getStudentById(studentId)
        .then(stud => {
            res.render('student/Form', {
                stud: stud,
                formMode: 'edit',
                pageTitle: 'Edit Student',
                btnLabel: 'Edit',
                formAction: '/students/edit',
                navLocation: 'student'
            });
        });
}
exports.addStudent = (req, res, next) => {
    const studData = { ...req.body };
    StudentRepository.createStudent(studData)
        .then(result => {
            res.redirect('/students');
        });
};

exports.updateStudent = (req, res, next) => {
    const studId = req.body._id;
    const studData = { ...req.body };
    StudentRepository.updateStudent(studId, studData)
        .then(result => {
            res.redirect('/students');
        });
};

exports.deleteStudent = (req, res, next) => {
    const studId = req.params.studentId;
    StudentRepository.deleteStudent(studId)
        .then(() => {
            res.redirect('/students');
        });
};