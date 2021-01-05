const Sequelize = require('sequelize');

const Student = require('../../model/sequelize/Student');
const Lesson = require('../../model/sequelize/Lesson');
const Presence = require('../../model/sequelize/Presence');


exports.getPresences = () => {
    return Presence.findAll({
        include: [
            {
                model: Student,
                as: 'student'
            },
            {
                model: Lesson,
                as: 'lesson'
            }]
    });
};
exports.getPresenceById = (presenceId) => {
    return Presence.findByPk(presenceId, {
        include: [
            {
                model: Student,
                as: 'student'
            },
            {
                model: Lesson,
                as: 'lesson'
            }]
    });
};
exports.createPresence = (data) => {
    console.log(JSON.stringify(data));

    return Presence.create({
        student_id: data.student_id,
        lesson_id: data.lesson_id,
        isabsent: data.isabsent,
        absenceReason: data.absenceReason
    });
};
exports.updatePresence = (presenceId, data) => {
    return Presence.update(data, { where: { _id: presenceId } });
}

exports.deletePresence = (presenceId) => {
    return Presence.destroy({
        where: { _id: presenceId }
    });
}
exports.deleteManyPresences = (presenceId) => {
    return Presence.find({ _id: { [Sequelize.Op.in]: presenceId } })
}