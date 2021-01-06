const express = require('express');
const router = express.Router();
const presenceController = require('../controllers/presenceController');

router.get('/', presenceController.showPresenceList);
router.get('/add', presenceController.showAddPresenceForm);
router.get('/details/:presenceId', presenceController.showPresenceDetails);
router.get('/edit/:presenceId', presenceController.showPresenceEdit);

router.post('/add', presenceController.addPresence);
router.post('/edit', presenceController.updatePresence);
router.get('/delete/:presenceId', presenceController.deletePresence);

module.exports = router;
