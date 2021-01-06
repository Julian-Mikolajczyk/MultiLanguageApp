const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/', teacherController.showTeacherList);
router.get('/add', teacherController.showAddTeacherForm);
router.get('/details/:teacherId', teacherController.showTeacherDetails);
router.get('/edit/:teacherId', teacherController.showTeacherEdit);

router.post('/add', teacherController.addTeacher);
router.post('/edit', teacherController.updateTeacher);
router.get('/delete/:teacherId', teacherController.deleteTeacher);
module.exports = router;
