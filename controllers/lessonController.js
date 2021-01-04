exports.showLessonList = (req, res, next) => {
    res.render('lesson/Lessons', { navLocation: 'lesson' });
}
exports.showAddLessonForm = (req, res, next) => {
    res.render('lesson/Add-Lesson', { navLocation: 'lesson' });
}
exports.showLessonDetails = (req, res, next) => {
    res.render('lesson/Lesson-details', { navLocation: 'lesson' });
}
exports.showLessonEdit = (req, res, next) => {
    res.render('lesson/Edit-Lesson-Table', { navLocation: 'lesson' });
}