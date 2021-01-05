const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Teacher = sequelize.define('Teacher', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salary: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    hiredate: {
        type: Sequelize.DATE,
        allowNull: false,
    }

});

module.exports = Teacher;