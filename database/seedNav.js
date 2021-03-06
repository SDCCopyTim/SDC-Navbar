// const mongoose = require('mongoose');
// const db = require('./index.js');
// const faker = require('faker');
// faker.locale = 'en_US';
// const fs = require('fs');


// // This is just a seed file for the nav bar search database.
// // Only run once to populate a locations and camps collection in a MongoDB database called 'timcamp'.

// let locationsGenerator = function() {
//   let locations = [];
//   for (var i = 0; i < 150; i++) {
//     let locationCity = faker.address.city();
//     let locationState = faker.address.state();
//     let location = {
//       city: locationCity,
//       state: locationState
//     };
//     locations.push(location);
//   }
//   db.Location.insertMany(locations, function (err, results) {
//     if (err) {
//       console.error(err);
//     } else {
//       db.connection.close();
//       console.log('Locations seed successful!');
//     }
//   });
// };

// let campsGenerator = function() {
//   let camps = [];
//   for (var j = 0; j < 200; j++) {
//     let campNamePrefixes = ['', '', 'South ', '', '', 'West ', '', '', 'New ', '', '', 'Old ', '', ''];
//     let campNameSuffixes = ['', ' State Park', ' Lake', ' Farm', ' National Forest', ' Recreation Area', '', ' Preserve', ' State Forest', ' Glen', ' Hollow', '', ' Canyon', ' Oasis', ' Cove', ' Camp', ' Dessert', ' Valley', ' Creek'];
//     let campNamePrefix = campNamePrefixes[Math.floor(Math.random() * Math.floor(campNamePrefixes.length))];
//     let campNameSuffix = campNameSuffixes[Math.floor(Math.random() * Math.floor(campNameSuffixes.length))];
//     let campName = campNamePrefix + faker.name.lastName() + campNameSuffix;
//     let campType = 'Property';
//     if (campName.slice(-10) === 'State Park' || campName.slice(-15) === 'National Forest' || campName.slice(-15) === 'Recreation Area' || campName.slice(-8) === 'Preserve' || campName.slice(-12) === 'State Forest') {
//       campType = 'Public Park';
//     }
//     let campState = faker.address.state();
//     let campPhotoSuffix = faker.random.number({min: 1, max: 132});
//     let campPhoto = `https://timcamp-image-storage.s3-us-west-1.amazonaws.com/camp-images/timcamp_camp_${campPhotoSuffix}.jpg`;
//     let camp = {
//       name: campName,
//       type: campType,
//       state: campState,
//       photo: campPhoto
//     };
//     camps.push(camp);
//   }
//   db.Camp.insertMany(camps, function (err, results) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log('Camps seed successful!');
//       locationsGenerator();
//     }
//   });
// };

// campsGenerator();