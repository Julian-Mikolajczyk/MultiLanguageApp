const Sequelize = require('sequelize');
//opreacje crud 
const Student = require("../../model/sequelize/Student");
const Lesson = require("../../model/sequelize/Lesson");
const Presence = require("../../model/sequelize/Presence");

exports.getStudents = () => {
    return Student.findAll();
};

exports.getStudentById = (studentId) => {
    return Student.findByPk(studentId,
        {
            include: [{
                model: Presence,
                as: 'presences',
                include: [{
                    model: Lesson,
                    as: 'lesson'
                }]
            }]
        });
};

exports.createStudent = (newStudent) => {
    return Student.create({
        name: newStudent.name,
        surname: newStudent.surname,
        PESEL: newStudent.PESEL,
        email: newStudent.email
    });
};
exports.updateStudent = (studentId, studentData) => {
    const name = studentData.name;
    const surname = studentData.surname;
    const PESEL = studentData.PESEL;
    const email = studentData.email;
    return Student.update(studentData, { where: { _id: studentId } });
};

exports.deleteStudent = (StudentId) => {
    return Student.destroy({
        where: { _id: StudentId }
    });
};