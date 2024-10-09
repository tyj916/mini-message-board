const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query(`
    SELECT * FROM messages
  `);
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query(`
    SELECT * FROM messages WHERE id = $1
  `, [id]);
  return rows[0];
}

async function insertMessage({ text, username, added }) {
  const SQL = `
    INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)
  `;
  const values = [text, username, added];
  await pool.query(SQL, values);
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertMessage
};