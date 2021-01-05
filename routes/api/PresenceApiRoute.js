const express = require('express');
const router = express.Router();

const presenceApiController = require('../../api/PresenceAPI');

router.get('/', presenceApiController.getPresences);
router.get('/:pressId', presenceApiController.getPresenceById);
router.post('/', presenceApiController.createPresence);
router.put('/:pressId', presenceApiController.updatePresence);
router.delete('/:pressId', presenceApiController.deletePresence);

module.exports = router;