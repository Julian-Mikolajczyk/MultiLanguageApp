const sequelize = require('./sequelize');

const Student = require('../../model/sequelize/Student');
const Teacher = require('../../model/sequelize/Teacher');
const Lesson = require('../../model/sequelize/Lesson');
const Presence = require('../../model/sequelize/Presence');


module.exports = () => {
    Student.hasMany(Presence, { as: 'presences', foreignKey: { name: 'student_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Presence.belongsTo(Student, { as: 'student', foreignKey: { name: 'student_id', allowNull: false } });
    Lesson.hasMany(Presence, { as: 'presences', foreignKey: { name: 'lesson_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Presence.belongsTo(Lesson, { as: 'lesson', foreignKey: { name: 'lesson_id', allowNull: false } });
    Teacher.hasMany(Lesson, { as: 'lessons', foreignKey: { name: 'teacher_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Lesson.belongsTo(Teacher, { as: 'teacher', foreignKey: { name: 'teacher_id', allowNull: false } });

    let allLessons, allStudents, allTeachers;
    return sequelize
        .sync({ force: true })
        .then(() => {
            return Student.findAll();
        })
        .then(stud => {
            if (!stud || stud.length == 0) {
                return Student.bulkCreate([
                    { name: 'Jan', surname: 'Kowalski', PESEL: '30129905052', email: 'jan.kowalski@gmail.com' },
                    { name: 'Adam', surname: 'Zieliński', PESEL: '30129912345', email: 'adam.zielinski@gmail.com' },
                    { name: 'Michał', surname: 'Pazio', PESEL: '30129923456', email: 'michal.pazio@gmail.com' }
                ])
                    .then(() => {
                        return Student.findAll();
                    });
            } else {
                return stud;
            }
        })
        .then(stud => {
            allStudents = stud;
            return Teacher.findAll();
        })
        //tutaj poczatek teachera
        .then(teach => {
            if (!teach || teach.length == 0) {
                return Teacher.bulkCreate([
                    { name: 'Kamil', surname: 'Kowalski', salary: '1111', hiredate: '2019-10-10' },
                    { name: 'Elżbieta', surname: 'Zieliński', salary: '2222', hiredate: '2018-07-03' },
                    { name: 'Piotr', surname: 'Pazio', salary: '3333', hiredate: '2017-04-03' }
                ])
                    .then(() => {
                        return Teacher.findAll();
                    });
            } else {
                return teach;
            }
        })
        .then(teach => {
            allTeachers = teach;
            return Lesson.findAll();
        })
        //tutaj koniec teachera
        .then(less => {
            if (!less || less.length == 0) {
                return Lesson.bulkCreate([
                    { teacher_id: allTeachers[0]._id, date: '2020-10-30', starttime: '10:15', endtime: '11:45', topic: 'USA elections', classroomnr: '2B' },
                    { teacher_id: allTeachers[1]._id, date: '2020-09-30', starttime: '15:45', endtime: '17:15', topic: 'nouns', classroomnr: '11A' },
                ])
                    .then(() => {
                        return Lesson.findAll();
                    });
            } else {
                return less;
            }
        })
        .then(less => {
            allLessons = less;
            return Presence.findAll();
        })
        .then(pres => {
            if (!pres || pres.length == 0) {
                return Presence.bulkCreate([
                    { student_id: allStudents[0]._id, lesson_id: allLessons[0]._id, isabsent: false, absenceReason: '' },
                    { student_id: allStudents[1]._id, lesson_id: allLessons[0]._id, isabsent: true, absenceReason: 'sick' },
                    { student_id: allStudents[0]._id, lesson_id: allLessons[1]._id, isabsent: false, absenceReason: '' },
                ]);
            } else {
                return pres;
            }
        });
};