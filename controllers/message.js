const messages = [
  {
    text: "Hi there!",
    user: "Amando", 
    added: new Date()
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date()
  }
];

const getAllMessages = (req, res) => {
  res.render('index', { 
    title: "Mini Messageboard", 
    messages: messages,
  });
};

const addMessage = (req, res) => {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  res.redirect('/');
}

module.exports = {
  getAllMessages,
  addMessage
}