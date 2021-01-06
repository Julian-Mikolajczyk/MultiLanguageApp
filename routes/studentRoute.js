const express = require('express');
const router = express.Router();
const studentControler = require('../controllers/studentController');

router.get('/', studentControler.showStudentList);
router.get('/add', studentControler.showAddStudentForm);
router.get('/details/:studentId', studentControler.showStudentDetails);
router.get('/edit/:studentId', studentControler.showStudentEdit);

router.post('/add', studentControler.addStudent);
router.post('/edit', studentControler.updateStudent);
router.get('/delete/:studentId', studentControler.deleteStudent);

module.exports = router;
