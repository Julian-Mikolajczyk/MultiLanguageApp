const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');

router.get('/', lessonController.showLessonList);
router.get('/add', lessonController.showAddLessonForm);
router.get('/details/:lessonId', lessonController.showLessonDetails);
router.get('/edit/:lessonId', lessonController.showLessonEdit);

router.post('/add', lessonController.addLesson);
router.post('/edit', lessonController.updateLesson);
router.get('/delete/:lessonId', lessonController.deleteLesson);

module.exports = router;
