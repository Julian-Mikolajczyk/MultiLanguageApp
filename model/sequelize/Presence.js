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
        allowNull: false
    },
    lesson_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    isabsent: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    absenceReason: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Presence;