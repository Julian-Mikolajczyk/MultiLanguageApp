exports.showPresenceList = (req, res, next) => {
    res.render('presence/Presences', { navLocation: 'presence' });
}
exports.showAddPresenceForm = (req, res, next) => {
    res.render('presence/Add-Presence', { navLocation: 'presence' });
}
exports.showPresenceDetails = (req, res, next) => {
    res.render('presence/Presences-table', { navLocation: 'presence' });
}
exports.showPresenceEdit = (req, res, next) => {
    res.render('presence/Presence-Edit-Table', { navLocation: 'presence' });
}