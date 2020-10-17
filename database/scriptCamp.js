const faker = require('faker');
faker.locale = 'en_US';
const fs = require('fs');

const writeCamps = fs.createWriteStream('campsPG.csv');
writeCamps.write('id,name,type,state,photo\n', 'utf8');

let writeTenMillionCamps = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;

  let write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;

      let campNamePrefixes = ['', '', 'South ', '', '', 'West ', '', '', 'New ', '', '', 'Old ', '', ''];
      let campNameSuffixes = ['', ' State Park', ' Lake', ' Farm', ' National Forest', ' Recreation Area', '', ' Preserve', ' State Forest', ' Glen', ' Hollow', '', ' Canyon', ' Oasis', ' Cove', ' Camp', ' Dessert', ' Valley', ' Creek'];
      let campNamePrefix = campNamePrefixes[Math.floor(Math.random() * Math.floor(campNamePrefixes.length))];
      let campNameSuffix = campNameSuffixes[Math.floor(Math.random() * Math.floor(campNameSuffixes.length))];
      let name = campNamePrefix + faker.address.state() + campNameSuffix;
      let type = 'Property';
      if (name.slice(-10) === 'State Park' || name.slice(-15) === 'National Forest' || name.slice(-15) === 'Recreation Area' || name.slice(-8) === 'Preserve' || name.slice(-12) === 'State Forest') {
        type = 'Public Park';
      }
      let state = faker.address.state();
      let campPhotoSuffix = faker.random.number({min: 1, max: 132});
      let photo = `https://timcamp-image-storage.s3-us-west-1.amazonaws.com/camp-images/timcamp_camp_${campPhotoSuffix}.jpg`;

      const data = `${name},${type},${state},${photo}\n`;
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


writeTenMillionCamps(writeCamps, 'utf-8', () => {
  writeCamps.end();
});