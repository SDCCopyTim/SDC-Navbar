import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const SearchResultLocation = (props) => {
  return (
    <li className="nav-search-result-location-container">
      <div className="nav-search-result-location-icon">
        <FaMapMarkerAlt />
      </div>
      <div className="nav-search-result-location">
        {props.location.city}, {props.location.state}
      </div>
    </li>
  );
};

export default SearchResultLocation;