const { Router } = require('express');
const messagesController = require('../controllers/messagesController');
const messagesRouter = Router();

messagesRouter.get('/', messagesController.getAllMessages);
messagesRouter.get('/message/:id', messagesController.getMessageById);
messagesRouter.get('/new', messagesController.addMessageGet);
messagesRouter.post('/new', messagesController.addMessagePost);

module.exports = messagesRouter;