const express = require('express');
const router = express.Router();
const lesssonController = require('../controllers/lessonController');

router.get('/', lesssonController.showLessonList);
router.get('/add', lesssonController.showAddLessonForm);
router.get('/details/:lessonId', lesssonController.showLessonDetails);
router.get('/edit/:lessonId', lesssonController.showLessonEdit);

router.post('/add', lesssonController.addLesson);
router.post('/edit', lesssonController.updateLesson);
router.get('/delete/:lessonId', lesssonController.deleteLesson);

module.exports = router;
