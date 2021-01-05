const LessonRepository = require('../repository/sequelize/LessonRepository');

exports.getLessons = (req, res, next) => {
    LessonRepository.getLessons()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
        });
};
exports.getLessonById = (req, res, next) => {
    const lessId = req.params.lessId;
    LessonRepository.getLessonById(lessId)
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: 'Lesson with id: ' + lessId + ' not found'
                })
            } else {
                res.status(200).json(data);
            }
        });
};
exports.createLesson = (req, res, next) => {
    console.log("jestem tu");
    console.log(req.body);
    LessonRepository.createLesson(req.body)
        .then(newObj => {
            console.log("jestem tu3");
            res.status(201).json(newObj);
        })
        .catch(err => {
            console.log("jestem tu2 " + err);
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
exports.updateLesson = (req, res, next) => {
    const lessId = req.params.lessId;
    LessonRepository.updateLesson(lessId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Lesson updated!', lesson: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};
exports.deleteLesson = (req, res, next) => {
    const lessId = req.params.lessId;
    LessonRepository.deleteLesson(lessId)
        .then(result => {
            res.status(200).json({ message: 'Lesson removed', lesson: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};