const db = require('../db/queries');

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', { 
    title: "Mini Messageboard", 
    messages: messages,
  });
}

async function getMessageById(req, res) {
  const messageId = req.params.id;
  const message = await db.getMessageById(messageId);

  res.render('message', {
    message: message
  });
}

function addMessageGet(req, res) {
  res.render('form', { title: 'New Message Form' });
}

async function addMessagePost(req, res) {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;

  await db.insertMessage({
    text: messageText,
    username: messageUser,
    added: new Date()
  });

  res.redirect('/');
}

module.exports = {
  getAllMessages,
  getMessageById,
  addMessageGet,
  addMessagePost
}