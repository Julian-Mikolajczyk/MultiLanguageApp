const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Lesson = sequelize.define('Lesson', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    starttime: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endtime: {
        type: Sequelize.STRING,
        allowNull: false
    },
    topic: {
        type: Sequelize.STRING,
        allowNull: false
    },
    classroomnr: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = Lesson;