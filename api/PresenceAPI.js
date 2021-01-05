const PresenceRepository = require('../repository/sequelize/PresenceRepository');

exports.getPresences = (req, res, next) => {
    PresenceRepository.getPresences()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
        });
};
exports.getPresenceById = (req, res, next) => {
    const pressId = req.params.pressId;
    PresenceRepository.getPresenceById(pressId)
        .then(data => {
            if (!data) {
                res.status(404).json({
                    message: 'Presence with id: ' + pressId + ' not found'
                })
            } else {
                res.status(200).json(data);
            }
        });
};
exports.createPresence = (req, res, next) => {
    // console.log("jestem tu")
    PresenceRepository.createPresence(req.body)
        .then(newObj => {
            // console.log("jestem tu2")
            res.status(201).json(newObj);
        })
        .catch(err => {
            // console.log("abcdacac" + err)
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
exports.updatePresence = (req, res, next) => {
    const pressId = req.params.pressId;
    PresenceRepository.updatePresence(pressId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Presence updated!', presence: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};
exports.deletePresence = (req, res, next) => {
    const pressId = req.params.pressId;
    PresenceRepository.deletePresence(pressId)
        .then(result => {
            res.status(200).json({ message: 'Presence removed', presence: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};