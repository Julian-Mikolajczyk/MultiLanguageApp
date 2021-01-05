const express = require('express');
const router = express.Router();

const lessonApiController = require('../../api/LessonAPI');

router.get('/', lessonApiController.getLessons);
router.get('/:lessId', lessonApiController.getLessonById);
router.post('/', lessonApiController.createLesson);
router.put('/:lessId', lessonApiController.updateLesson);
router.delete('/:lessId', lessonApiController.deleteLesson);

module.exports = router;