const faker = require('faker');
faker.locale = 'en_US';
const fs = require('fs');

const writeLocations = fs.createWriteStream('locations.csv');
writeLocations.write('id,city,state\n', 'utf8');

let writeTenMillionLocations = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  let write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      let city = faker.address.city();
      let state = faker.address.state();

      const data = `${id},${city},${state}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  };
  write();
};


writeTenMillionLocations(writeLocations, 'utf-8', () => {
  writeLocations.end();
});