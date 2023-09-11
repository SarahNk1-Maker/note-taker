const fb = require('express').Router();
const { readFromFile,readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');


// GET Route for retrieving all the notes
fb.get('/notes', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting notes
fb.post('/notes', (req, res) => {
  // Destructuring assignment for the items in req.body
  const {title,text } = req.body;



  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newTitle= {
      title,
      text,
      newTitle_id: uuid(),
    };

    readAndAppend(newTitle, './db/db.json');

    const response = {
      status: 'success',
      body: newTitle,
    };

    res.json(response);
  } else {
    res.json('Error in posting Title');
  }
});
    
 


module.exports = fb;