const express = require('express');
const router = express.Router();
const lesssonController = require('../controllers/lessonController');

router.get('/', lesssonController.showLessonList);
router.get('/add', lesssonController.showAddLessonForm);
router.get('/details/:lessonId', lesssonController.showLessonDetails);
router.get('/edit', lesssonController.showLessonEdit);

module.exports = router;
