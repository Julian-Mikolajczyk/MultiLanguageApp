const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Teacher = sequelize.define('Teacher', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "<server> Pole powinno zawierać od 2 do 60 znaków"
            },
            containsNumbers(value) {
                if (/\d/.test(value)) {
                    throw new Error('<server> Pole nie powinno zawierać cyfr');
                }
            },
            containsSpecialChars(value) {
                if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value)) {
                    throw new Error('<server> Pole nie powinno zawierać znaków specjalnych');
                }
            }
        }
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            },
            len: {
                args: [2, 60],
                msg: "<server> Pole powinno zawierać od 2 do 60 znaków"
            },
            containsNumbers(value) {
                if (/\d/.test(value)) {
                    throw new Error('<server> Pole nie powinno zawierać cyfr');
                }
            },
            containsSpecialChars(value) {
                if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value)) {
                    throw new Error('<server> Pole nie powinno zawierać znaków specjalnych');
                }
            }
        }
    },
    salary: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            },
            len: {
                args: [2, 6],
                msg: "<server> Pole powinno zawierać od 2 do 6 liczb"
            },
            isInt: {
                msg: "<server> Pole może być tylko liczbą"
            }
        }
    },
    hiredate: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            },
            isDate: {
                msg: "<server> Pole może być tylko datą"
            },
            dateAfter(value) {
                var d = new Date(),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;

                let date = [year, month, day].join('-');
                const pattern = /(\d{4})-(\d{2})-(\d{2})/;
                if (!pattern.test(date)) {
                    throw new Error('<server> Pole nie jest poprawna datą');
                }
                const valueDate = new Date(value);
                const compareToDate = new Date(d);
                if (valueDate.getTime() > compareToDate.getTime()) {
                    throw new Error('<server> Data nie może być późniejsza niż dzisiejsza');
                }
            }

        }
    }

});

module.exports = Teacher;