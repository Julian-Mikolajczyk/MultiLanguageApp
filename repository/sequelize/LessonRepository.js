const Sequelize = require('sequelize');
//opreacje crud 
const Student = require("../../model/sequelize/Student");
const Lesson = require("../../model/sequelize/Lesson");
// const Teacher = require("../../model/sequelize/Teacher")
const Presence = require("../../model/sequelize/Presence");
const Teacher = require("../../model/sequelize/Teacher");

exports.getLessons = () => {
    return Lesson.findAll({
        include: [
            {
                model: Teacher,
                as: 'teacher'
            }]
    });
};

exports.getLessonById = (lessonId) => {
    return Lesson.findByPk(lessonId,
        {
            include: [{
                model: Presence,
                as: 'presences',
                include: [{
                    model: Student,
                    as: 'student'
                }]
            },
            {
                model: Teacher,
                as: 'teacher'
            }]
        });
};

exports.createLesson = (newLesson) => {
    return Lesson.create({
        teacher_id: newLesson.teacher_id,
        date: newLesson.date,
        starttime: newLesson.starttime,
        endtime: newLesson.endtime,
        topic: newLesson.topic,
        classroomnr: newLesson.classroomnr
    });
};
exports.updateLesson = (lessonId, lessonData) => {
    // const name = studentData.name;
    // const surname = studentData.surname;
    // const PESEL = studentData.PESEL;
    // const email = studentData.email;
    return Lesson.update(lessonData, { where: { _id: lessonId } });
};

exports.deleteLesson = (lessonId) => {
    return Lesson.destroy({
        where: { _id: lessonId }
    });
};