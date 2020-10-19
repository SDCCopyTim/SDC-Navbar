const { Pool } = require('pg');
const pool = require('./index.js');

module.exports = {

  searchLocations: (searchTerm, callback) => {
    pool.query(`SELECT * FROM locations WHERE city ILIKE '${searchTerm}%' LIMIT 5;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results.rows);
      }
    });
  },

  searchCamps: (searchTerm, callback) => {
    pool.query(`SELECT * FROM camps WHERE name ILIKE '${searchTerm}%' LIMIT 8;`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results.rows);
      }
    });
  },

};