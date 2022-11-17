const notes = require('express').Router();
const { readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// notes.get('/', (req, res) => {
//   console.info(`${req.method} requrest received for notes.`);
//   readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// });

notes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a note.`);
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.errored('Error in adding note');
  };
});

module.exports = notes;