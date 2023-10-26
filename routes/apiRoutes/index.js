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

router.post('/api/notes', (req,res) => {
    let newNote ={
       id: uuid(),
        title:req.body.title,
        text:req.body.text
    };

    let oldNote = JSON.parse(fs.readFileSync(db,"utf-8"))
    oldNote.push(newNote)
    fs.writeFileSync('./db/db.json',JSON.stringify(oldNote,null,2))

    res.json(oldNote);
});

module.exports = router;