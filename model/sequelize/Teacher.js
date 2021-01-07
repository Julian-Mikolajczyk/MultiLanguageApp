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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
            isAlpha: {
                msg: "Pole moze zawierac tylko litery"
            }
        }
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "Pole powinno zawierać od 2 do 60 znaków"
            },
            isAlpha: {
                msg: "Pole moze zawierac tylko litery"
            }
        }
    },
    salary: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 6],
                msg: "Pole powinno zawierać od 2 do 6 liczb"
            },
            isInt: {
                msg: "Pole może być tylko liczbą"
            }
        }
    },
    hiredate: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isDate: {
                msg: "Pole może być tylko datą"
            }
        }
    }

});

module.exports = Teacher;