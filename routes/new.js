const express = require('express');
const messageController = require('../controllers/message');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('form', { title: 'New Message Form' });
});

router.post('/', messageController.addMessage);

module.exports = router;