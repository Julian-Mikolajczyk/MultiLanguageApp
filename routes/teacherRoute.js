const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/', teacherController.showTeacherList);
router.get('/add', teacherController.showAddTeacherForm);
router.get('/details/:teacherId', teacherController.showTeacherDetails);
router.get('/edit', teacherController.showTeacherEdit);

module.exports = router;
