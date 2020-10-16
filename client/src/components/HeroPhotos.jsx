import React, { useState } from 'react';

const HeroPhotos = (props) => {

  const photoSets = [133, 136, 148, 175, 133, 136, 139, 142, 145, 148, 151, 154, 157, 160, 166, 169, 172, 175, 136];

  const [photo1, setPhoto1] = useState(photoSets[(Math.floor(Math.random() * (19 - 1) + 1))]);
  const [photo2, setPhoto2] = useState(photo1 + 1);
  const [photo3, setPhoto3] = useState(photo1 + 2);

  let photo1Style = {
    backgroundImage: 'url(' + `https://timcamp-image-storage.s3-us-west-1.amazonaws.com/camp-images/timcamp_camp_${photo1}.jpg` + ')'
  };
  let photo2Style = {
    backgroundImage: 'url(' + `https://timcamp-image-storage.s3-us-west-1.amazonaws.com/camp-images/timcamp_camp_${photo2}.jpg` + ')'
  };
  let photo3Style = {
    backgroundImage: 'url(' + `https://timcamp-image-storage.s3-us-west-1.amazonaws.com/camp-images/timcamp_camp_${photo3}.jpg` + ')'
  };

  return (
    <div className="hero-container">
      <div style={photo1Style} className="hero-photo-1"></div>
      <div style={photo2Style} className="hero-photo-2"></div>
      <div style={photo3Style} className="hero-photo-3"></div>
    </div>
  );
};

export default HeroPhotos;