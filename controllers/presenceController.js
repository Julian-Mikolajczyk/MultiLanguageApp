const LessonRepository = require('../repository/sequelize/LessonRepository');
const StudentRepository = require('../repository/sequelize/StudentRepository');
const PresenceRepository = require('../repository/sequelize/PresenceRepository');


exports.showPresenceList = (req, res, next) => {
    PresenceRepository.getPresences()
        .then(pres => {
            res.render('presence/Presences', {
                pres: pres,
                navLocation: 'presence'
            });
        });
}
exports.showAddPresenceForm = (req, res, next) => {
    let alllessons, allStudents;
    StudentRepository.getStudents()
        .then(students => {
            allStudents = students;
            return LessonRepository.getLessons();
        })
        .then(lessons => {
            alllessons = lessons;
            res.render('presence/form', {
                pres: {},
                formMode: 'createNew',
                alllessons: alllessons,
                allStudents: allStudents,
                pageTitle: 'Add Presence',
                btnLabel: 'Add',
                formAction: '/presences/add',
                navLocation: 'presence'
            });
        })

}
exports.showPresenceDetails = (req, res, next) => {
    let alllessons, allStudents;
    const presenceId = req.params.presenceId;
    PresenceRepository.getPresenceById(presenceId)
        .then(pres => {
            res.render('presence/form', {
                pres: pres,
                formMode: 'showDetails',
                pageTitle: 'Presence Details',
                formAction: '',
                navLocation: 'less',
                alllessons: '',
                allStudents: '',
                navLocation: 'presence'
            });
        })

}
exports.showPresenceEdit = (req, res, next) => {
    let alllessons, allStudents;
    const presenceId = req.params.presenceId;
    StudentRepository.getStudents()
        .then(students => {
            allStudents = students;
            return LessonRepository.getLessons();
        })
        .then(lessons => {
            alllessons = lessons;
            return PresenceRepository.getPresenceById(presenceId);
        })
        .then(pres => {
            res.render('presence/form', {
                pres: pres,
                formMode: 'edit',
                alllessons: alllessons,
                allStudents: allStudents,
                pageTitle: 'Edit Presence',
                btnLabel: 'Edit',
                formAction: '/presences/edit',
                navLocation: 'presence'
            });
        })
}
exports.addPresence = (req, res, next) => {
    const presenceData = { ...req.body };
    PresenceRepository.createPresence(presenceData)
        .then(result => {
            res.redirect('/presences');
        });
};
exports.updatePresence = (req, res, next) => {
    // console.log({ ...req.body });
    const presenceId = req.body._id;
    const pressData = { ...req.body };
    PresenceRepository.updatePresence(presenceId, pressData)
        .then(result => {
            res.redirect('/presences');
        });
};
exports.deletePresence = (req, res, next) => {
    const presenceId = req.params.presenceId;
    PresenceRepository.deletePresence(presenceId)
        .then(() => {
            res.redirect('/presences');
        });
};