const mongoose = require('mongoose');
const db = require('./index.js');

module.exports = {

  searchLocations: (searchTerm, callback) => {
    db.Location.find({
      'city': { '$regex': searchTerm, '$options': 'i' }
    }).limit(5).exec((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  searchCamps: (searchTerm, callback) => {
    db.Camp.find({
      'name': { '$regex': searchTerm, '$options': 'i' }
    }).limit(8).exec((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  postLocation: (location, callback) => {
    let newLocation = new db.Location ({
      city: location.city,
      state: location.state,
    });
    newLocation.save(function (err, result) {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  editLocationCity: (data, callback) => {
    db.Location.updateOne(
      {_id: data.locationId},
      {city: data.city}
    ).exec((err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },


  // Delete a location to the database by locationId
  deleteLocationById: (locationId, callback) => {
    db.Location.deleteOne({_id: locationId}, function(err, result) {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  }
};
