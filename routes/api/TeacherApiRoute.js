const express = require('express');
const router = express.Router();

const teacherApiController = require('../../api/TeacherAPI');

router.get('/', teacherApiController.getTeachers);
router.get('/:teachId', teacherApiController.getTeacherById);
router.post('/', teacherApiController.createTeacher);
router.put('/:teachId', teacherApiController.updateTeacher);
router.delete('/:teachId', teacherApiController.deleteTeacher);

module.exports = router;