const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/timcamp', {useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
  console.log('Connected to db');
});

const navCampSchema = new mongoose.Schema({
  name: String,
  type: String,
  state: String,
  photo: String
});

const navLocationSchema = new mongoose.Schema({
  city: String,
  state: String
});

const Camp = mongoose.model('Camp', navCampSchema);
const Location = mongoose.model('Location', navLocationSchema);

module.exports = {
  Camp,
  Location,
  connection
};