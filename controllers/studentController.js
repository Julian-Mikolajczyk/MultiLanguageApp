const StudentRepository = require('../repository/sequelize/StudentRepository');

const tmpErr = {
    errors: [
        { path: [""] }
    ]
}

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
        navLocation: 'student',
        validationErrors: tmpErr.errors
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
                navLocation: 'student',
                validationErrors: tmpErr.errors
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
                navLocation: 'student',
                validationErrors: tmpErr.errors
            });
        });
}
exports.addStudent = (req, res, next) => {
    const studData = { ...req.body };
    StudentRepository.createStudent(studData)
        .then(result => {
            res.redirect('/students');
        })
        .catch(err => {
            err.errors.forEach(e => {
                if (e.path.includes('email') && e.type == 'unique violation') {
                    e.message = "Podany adres email jest już używany";
                }
                if (e.path.includes('PESEL') && e.type == 'unique violation') {
                    e.message = "Taki PESEL już istnieje w bazie danych";
                }
            });
            res.render('student/form', {
                stud: studData,
                pageTitle: 'Add New Student',
                formMode: 'createNew',
                btnLabel: 'Add',
                formAction: '/students/add',
                navLocation: 'student',
                validationErrors: err.errors
            })

        });
};

exports.updateStudent = (req, res, next) => {
    const studId = req.body._id;
    const studData = { ...req.body };
    StudentRepository.updateStudent(studId, studData)
        .then(result => {
            res.redirect('/students');
        }).catch(err => {
            res.render('student/form', {
                stud: studData,
                formMode: 'edit',
                pageTitle: 'Edit Student',
                btnLabel: 'Edit',
                formAction: '/students/edit',
                navLocation: 'student',
                validationErrors: err.errors
            });
        });
}

exports.deleteStudent = (req, res, next) => {
    const studId = req.params.studentId;
    StudentRepository.deleteStudent(studId)
        .then(() => {
            res.redirect('/students');
        });
};


