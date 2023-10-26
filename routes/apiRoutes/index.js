const fs = require('fs');
const router = require('express').Router();
const path = require('path');
const { v4: uuid } = require('uuid');

const db = path.join(__dirname, '../../db/db.json');

router.get('/api/notes', (req, res) => {
    fs.readFile(db, (err, data) => {
      if (err) {
        return res.status(500).send('Error reading the file.');
      }
      try {
        const parsedData = JSON.parse(data);
        res.json(parsedData);
      } catch (parseError) {
        res.status(500).send('Error parsing JSON data.');
      }
    });
});

module.exports = router;