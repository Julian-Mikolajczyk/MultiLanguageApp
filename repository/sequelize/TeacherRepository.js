const Sequelize = require('sequelize');
//opreacje crud 
const Teacher = require("../../model/sequelize/Teacher");
const Lesson = require("../../model/sequelize/Lesson");

exports.getTeachers = () => {
    return Teacher.findAll();
};

exports.getTeacherById = (teacherId) => {
    return Teacher.findByPk(teacherId,
        {
            include: [{
                model: Lesson,
                as: 'lessons',
            }]
        });
};

exports.createTeacher = (newTeacher) => {
    return Teacher.create({
        name: newTeacher.name,
        surname: newTeacher.surname,
        salary: newTeacher.salary,
        hiredate: newTeacher.hiredate
    });
};
exports.updateTeacher = (teacherId, teacherData) => {
    const name = teacherData.name;
    const surname = teacherData.surname;
    const salary = teacherData.salary;
    const hiredate = teacherData.hiredate;
    return Teacher.update(teacherData, { where: { _id: teacherId } });
};

exports.deleteTeacher = (teacherId) => {
    return Teacher.destroy({
        where: { _id: teacherId }
    });
};