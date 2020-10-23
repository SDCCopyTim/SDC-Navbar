const newrelic = require('newrelic');
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

// const cors = require('cors');
// var compression = require('compression');

const dbHelpers = require('../database-pg/dbHelpers.js');

// Server
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// app.use(cors());
// app.use(compression());

// Route to search for locations by city
app.get('/api/search/locations/:term', (req, res) => {
  dbHelpers.searchLocations(req.params.term, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

// Route to search for camps by name
app.get('/api/search/camps/:term', (req, res) => {
  dbHelpers.searchCamps(req.params.term, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});




// Port and connection
let port = 3002;
app.listen(port, () => console.log(`Connected and listening at port ${port}`));

