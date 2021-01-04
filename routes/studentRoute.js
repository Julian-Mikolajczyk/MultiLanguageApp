const express = require('express');
const router = express.Router();
const studentControler = require('../controllers/studentController');

router.get('/', studentControler.showStudentList);
router.get('/add', studentControler.showAddStudentForm);
router.get('/details/:studentId', studentControler.showStudentDetails);
router.get('/edit', studentControler.showStudentEdit);

module.exports = router;
