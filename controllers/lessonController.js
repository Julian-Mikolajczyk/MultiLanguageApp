const LessonRepository = require('../repository/sequelize/LessonRepository');
const teacherRepository = require('../repository/sequelize/TeacherRepository');


exports.showLessonList = (req, res, next) => {
    LessonRepository.getLessons()
        .then(lessons => {
            res.render('lesson/Lessons', {
                lessons: lessons,
                navLocation: 'lesson'
            });
        });
}
exports.showAddLessonForm = (req, res, next) => {
    let allteach;
    teacherRepository.getTeachers()
        .then(teachers => {
            allteach = teachers;
        })
        .then(lessons => {
            res.render('lesson/form', {
                lessons: {},
                formMode: 'createNew',
                allteach: allteach,
                pageTitle: 'Add Lesson',
                btnLabel: 'Add',
                formAction: '/lessons/add',
                navLocation: 'lesson'
            });
        });
}
exports.showLessonDetails = (req, res, next) => {
    let allteach;
    const lessonId = req.params.lessonId;
    teacherRepository.getTeachers()
        .then(teachers => {
            allteach = teachers;
            return LessonRepository.getLessonById(lessonId);
        })
        .then(lessons => {
            res.render('lesson/form', {
                lessons: lessons,
                formMode: 'showDetails',
                allteach: allteach,
                pageTitle: 'Lesson Details',
                formAction: '',
                navLocation: 'lesson'
            });
        });
}
exports.showLessonEdit = (req, res, next) => {
    let allteach;
    const lessonId = req.params.lessonId;
    teacherRepository.getTeachers()
        .then(teachers => {
            allteach = teachers;
            return LessonRepository.getLessonById(lessonId);
        })
        .then(lessons => {
            res.render('lesson/form', {
                lessons: lessons,
                formMode: 'edit',
                allteach: allteach,
                pageTitle: 'Edit Lesson',
                btnLabel: 'Edit',
                formAction: '/lessons/edit',
                navLocation: 'lesson'
            });
        });
}
exports.addLesson = (req, res, next) => {
    const lessonData = { ...req.body };
    LessonRepository.createLesson(lessonData)
        .then(result => {
            res.redirect('/lessons');
        });
};
exports.updateLesson = (req, res, next) => {
    const lessonId = req.body._id;
    const lessData = { ...req.body };
    LessonRepository.updateLesson(lessonId, lessData)
        .then(result => {
            res.redirect('/lessons');
        });
};
exports.deleteLesson = (req, res, next) => {
    const lessonId = req.params.lessonId;
    LessonRepository.deleteLesson(lessonId)
        .then(() => {
            res.redirect('/lessons');
        });
};