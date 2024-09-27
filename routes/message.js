const express = require('express');
const messageController = require('../controllers/message');
const router = express.Router();

router.get('/:id', messageController.getMessageById);

module.exports = router;