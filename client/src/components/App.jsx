import React, { useState } from 'react';
import Search from './Search.jsx';
import NearMeDropdown from './NearMeDropdown.jsx';
import AboutDropdown from './AboutDropdown.jsx';
import HostButton from './HostButton.jsx';
import HeroPhotos from './HeroPhotos.jsx';

const App = () => {

  const [aboutHover, setAboutHover] = useState(false);
  const [nearMeHover, setNearMeHover] = useState(false);

  return (
    <div>
      <div className="nav-navbar-container">
        <div className="nav-container-left">
          <div className="nav-logo-container">
            <img className="nav-logo" src="https://timcamp-image-storage.s3-us-west-1.amazonaws.com/logos/TimCamp_Logo-01.png" alt="TimCamp Logo" />
          </div>
          <Search />
        </div>
        <ul className="nav-container-right">
          <li className="nav-item"
            onMouseEnter={() => setNearMeHover(true)}
            onMouseLeave={() => setNearMeHover(false)}
          >
            <span className="nav-item-text">Near me</span>
            {nearMeHover && <NearMeDropdown />}
          </li>
          <li className="nav-item"
            onMouseEnter={() => setAboutHover(true)}
            onMouseLeave={() => setAboutHover(false)}
          >
            <span className="nav-item-text">About</span>
            {aboutHover && <AboutDropdown />}
          </li>

          <li className="nav-item">
            <span className="nav-item-text">Earn Timcash</span>
          </li>
          <li className="nav-item">
            <span className="nav-item-text">Log in</span>
          </li>
          <li className="nav-item">
            <span className="nav-item-text">Sign up</span>
          </li>
          <HostButton />
        </ul>
      </div>
      <HeroPhotos />
    </div>
  );
};

export default App;