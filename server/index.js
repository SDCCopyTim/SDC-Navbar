const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
var compression = require('compression');

const dbHelpers = require('../database/dbHelpers.js');

// Server
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(compression());

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

// Route to post location by city
app.post('/api/search/locations', (req, res) => {
  console.log(req.body);
  dbHelpers.postLocation(req.body, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('Location added');
    }
  });
});

app.put('/api/search/locations', (req, res) => {
  dbHelpers.editLocationCity(req.body, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('City updated!');
    }
  });
});

// Delete a review in the database for a particular campground by reviewId.
app.delete('/api/search/locations/:locationId', (req, res) => {
  dbHelpers.deleteLocationById(req.params.locationId, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('Location deleted!');
    }
  });
});


// Port and connection
let port = 3001;
app.listen(port, () => console.log(`Connected and listening at port ${port}`));

