const LessonRepository = require('../repository/sequelize/LessonRepository');
const StudentRepository = require('../repository/sequelize/StudentRepository');
const PresenceRepository = require('../repository/sequelize/PresenceRepository');

const tmpErr = {
    errors: [
        { path: [""] }
    ]
}

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
                pres: { lesson_id: "", student_id: "" },
                formMode: 'createNew',
                alllessons: alllessons,
                allStudents: allStudents,
                pageTitle: 'Add Presence',
                btnLabel: 'Add',
                formAction: '/presences/add',
                navLocation: 'presence',
                validationErrors: tmpErr.errors
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
                navLocation: 'presence',
                validationErrors: tmpErr.errors
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
                navLocation: 'presence',
                validationErrors: tmpErr.errors
            });
        })
}
exports.addPresence = (req, res, next) => {
    const presenceData = { ...req.body };
    if (!presenceData.isabsent) {
        presenceData.isabsent = false;
    } else {
        presenceData.isabsent = true;
    }
    PresenceRepository.createPresence(presenceData)
        .then(result => {
            res.redirect('/presences');
        }).catch(err => {
            let alllessons, allStudents;
            StudentRepository.getStudents()
                .then(students => {
                    allStudents = students;
                    return LessonRepository.getLessons();
                })
                .then(lessons => {
                    alllessons = lessons;
                    res.render('presence/form', {
                        pres: presenceData,
                        formMode: 'createNew',
                        alllessons: alllessons,
                        allStudents: allStudents,
                        pageTitle: 'Add Presence',
                        btnLabel: 'Add',
                        formAction: '/presences/add',
                        navLocation: 'presence',
                        validationErrors: err.errors
                    });
                })
        });
};
exports.updatePresence = (req, res, next) => {
    // console.log({ ...req.body });
    const presenceId = req.body._id;
    const pressData = { ...req.body };
    if (!pressData.isabsent) {
        pressData.isabsent = false;
    } else {
        pressData.isabsent = true;
    }
    PresenceRepository.updatePresence(presenceId, pressData)
        .then(result => {
            res.redirect('/presences');
        }).catch(err => {
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
                        pres: pressData,
                        formMode: 'edit',
                        alllessons: alllessons,
                        allStudents: allStudents,
                        pageTitle: 'Edit Presence',
                        btnLabel: 'Edit',
                        formAction: '/presences/edit',
                        navLocation: 'presence',
                        validationErrors: err.errors
                    });
                })
        });
};
exports.deletePresence = (req, res, next) => {
    const presenceId = req.params.presenceId;
    PresenceRepository.deletePresence(presenceId)
        .then(() => {
            res.redirect('/presences');
        });
};