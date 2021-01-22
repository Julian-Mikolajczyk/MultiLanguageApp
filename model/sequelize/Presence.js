const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Presence = sequelize.define('Presence', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            }
        }
    },
    lesson_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            }
        }
    },
    isabsent: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            },
            // isIn: {
            //     args: [['true', 'false']],
            //     msg: "<server> Pole przyjmuje tylko wartość true lub false"
            // }
        }
    },
    absenceReason: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Presence;