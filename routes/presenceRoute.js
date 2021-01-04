const express = require('express');
const router = express.Router();
const presenceController = require('../controllers/presenceController');

router.get('/', presenceController.showPresenceList);
router.get('/add', presenceController.showAddPresenceForm);
router.get('/details/:presenceId', presenceController.showPresenceDetails);
router.get('/edit', presenceController.showPresenceEdit);

module.exports = router;
