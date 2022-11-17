const express = require('express');
const notes = require('./routes/APIRoutes');
const html = require('./routes/HTMLRoutes')
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', notes);
app.use('/', html);




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);