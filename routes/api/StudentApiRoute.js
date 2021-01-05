const express = require('express');
const router = express.Router();

const studentApiController = require('../../api/StudentAPI');

router.get('/', studentApiController.getStudents);
router.get('/:studId', studentApiController.getStudentById);
router.post('/', studentApiController.createStudent);
router.put('/:studId', studentApiController.updateStudent);
router.delete('/:studId', studentApiController.deleteStudent);

module.exports = router;