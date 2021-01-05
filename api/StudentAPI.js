const StudentRepository = require('../repository/sequelize/StudentRepository');

exports.getStudents = (req, res, next) => {
    StudentRepository.getStudents()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
        });
};
//tutaj moze byc blad, skad params ma wiedziec co to jest studID
exports.getStudentById = (req, res, next) => {
    const studId = req.params.studId;
    StudentRepository.getStudentById(studId)
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: 'Student with id: ' + studId + ' not found'
                })
            } else {
                res.status(200).json(data);
            }
        });
};
exports.createStudent = (req, res, next) => {
    // console.log("jestem tu");
    StudentRepository.createStudent(req.body)
        .then(newObj => {
            // console.log("w create");
            res.status(201).json(newObj);
        })
        .catch(err => {
            // console.log("w catch");
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
//tutaj nawet na pewno bedzie blad w student:result nie wiem nawet co to jest
exports.updateStudent = (req, res, next) => {
    const studId = req.params.studId;
    StudentRepository.updateStudent(studId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Student updated!', student: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};
exports.deleteStudent = (req, res, next) => {
    const studId = req.params.studId;
    StudentRepository.deleteStudent(studId)
        .then(result => {
            res.status(200).json({ message: 'Student removed', student: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};