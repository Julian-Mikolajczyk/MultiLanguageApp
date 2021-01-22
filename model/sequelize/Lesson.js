const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');
const Teacher = require('../sequelize/Teacher');
const sequelizeTeacher = require('../sequelize/Teacher');

const Lesson = sequelize.define('Lesson', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            }
        }

    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            },
            isDate: {
                msg: "<server> Pole może być tylko datą"
            }
        }
    },
    starttime: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            },
            isTime(value) {
                if (!/\d{2}:\d{2}/.test(value)) {
                    throw new Error('<server> Pole powinno być w formacie hh:mm');
                }
            },
            isGreaterThanOtherField(value) {
                if (value > this.endtime) {
                    throw new Error('<server> Pole powinno zawierać czas wcześniejszy niż czas zakończenia lekcji');
                }
            }
        }
    },
    endtime: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            },
            isTime(value) {
                if (!/\d{2}:\d{2}/.test(value)) {
                    throw new Error('<server> Pole powinno być w formacie hh:mm');
                }
            },
            isGreaterThanOtherField(value) {
                if (value < this.starttime) {
                    console.log(value > this.starttime)
                    throw new Error('<server> Pole powinno zawierać czas późniejszy niż czas rozpoczęcia lekcji');
                }
            }
        }
    },
    topic: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            }
        }
    },
    classroomnr: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            }
        }
    }

});

module.exports = Lesson;