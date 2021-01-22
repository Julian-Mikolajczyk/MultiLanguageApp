const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Student = sequelize.define('Student', {
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
                msg: "<server> Pole nie może być puste"
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
    PESEL: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            },
            len: {
                args: [11, 11],
                msg: "<server> Pole powinno zawierać dokładnie 11 cyfr"
            },
            isNumeric: {
                msg: "<server> Pole powinno może składać się tylko z cyfr"
            }
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'email',
        validate: {
            notEmpty: {
                msg: "<server> Pole jest wymagane"
            },
            len: {
                args: [5, 60],
                msg: "<server> Pole powinno zawierać od 5 do 60 znaków"
            },
            isEmail: {
                args: true,
                msg: '<server> Pole powinno zawierać prawidłowy adres email'
            },

        },

    }

});

module.exports = Student;