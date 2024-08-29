const express = require('express');
const app = express();
const db = require('./database');
const sleepspots = require('./sleepspots');

// Insert the sleep spots into the database
const insertSleepspots = () => {
  return new Promise((resolve, reject) => {
    sleepspots.forEach((sleepspot) => {
      db.run(`
        INSERT INTO sleepspots (id, title, coordinats, infos)
        VALUES (?, ?, ?, ?);
      `, sleepspot.id, sleepspot.title, sleepspot.coordinats, sleepspot.infos, (err) => {
        if (err) {
          reject(err);
        }
      });
    });
    resolve();
  });
};

insertSleepspots().then(() => {
  // Create a route to get all sleep spots
  app.get('/sleepspots', (req, res) => {
    db.all('SELECT * FROM sleepspots', (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(rows);
      }
    });
  });

  // Create a route to get a single sleep spot by ID
  app.get('/sleepspots/:id', (req, res) => {
    const id = req.params.id;
    db.get(`SELECT * FROM sleepspots WHERE id = ${id}`, (err, row) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else if (!row) {
        res.status(404).send('Sleep spot not found');
      } else {
        res.json(row);
      }
    });
  });

  // Create a route to create a new sleep spot
  app.post('/sleepspots', (req, res) => {
    const { title, coordinats, infos } = req.body;
    db.run(`
      INSERT INTO sleepspots (title, coordinats, infos)
      VALUES (?, ?, ?);
    `, title, coordinats, infos, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ message: 'Sleep spot created successfully' });
      }
    });
  });

  // Create a route to update a sleep spot
  app.put('/sleepspots/:id', (req, res) => {
    const id = req.params.id;
    const { title, coordinats, infos } = req.body;
    db.run(`
      UPDATE sleepspots
      SET title = ?, coordinats = ?, infos = ?
      WHERE id = ${id};
    `, title, coordinats, infos, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json({ message: 'Sleep spot updated successfully' });
      }
    });
  });

  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
}).catch((err) => {
  console.error(err);
});