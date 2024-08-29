const sqlite3 = require('sqlite3').verbose();

// Create a new database or open an existing one
const db = new sqlite3.Database('sleepspots.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database');
  }
});

// Create the sleepspots table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS sleepspots (
    id INTEGER PRIMARY KEY,
    title TEXT,
    coordinats TEXT,
    infos TEXT
  );
`);

module.exports = db;