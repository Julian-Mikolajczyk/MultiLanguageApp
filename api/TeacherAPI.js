const TeacherRepository = require('../repository/sequelize/TeacherRepository');

exports.getTeachers = (req, res, next) => {
    TeacherRepository.getTeachers()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
        });
};
//tutaj moze byc blad, skad params ma wiedziec co to jest studID
exports.getTeacherById = (req, res, next) => {
    const teachId = req.params.teachId;
    TeacherRepository.getTeacherById(teachId)
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: 'Teacher with id: ' + teachId + ' not found'
                })
            } else {
                res.status(200).json(data);
            }
        });
};
exports.createTeacher = (req, res, next) => {
    TeacherRepository.createTeacher(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
exports.updateTeacher = (req, res, next) => {
    const teachId = req.params.teachId;
    TeacherRepository.updateTeacher(teachId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Teacher updated!', teacher: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};
exports.deleteTeacher = (req, res, next) => {
    const teachId = req.params.teachId;
    TeacherRepository.deleteTeacher(teachId)
        .then(result => {
            res.status(200).json({ message: 'Teacher removed', teacher: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};