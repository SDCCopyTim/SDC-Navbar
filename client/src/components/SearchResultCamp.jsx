import React from 'react';
import { FaCampground } from 'react-icons/fa';

const SearchResultCamp = (props) => {
  return (
    <li className="nav-search-result-camp-container">
      <div className="nav-search-result-camp-icon">
        <FaCampground />
      </div>
      <div className="nav-search-result-camp">
        <div className="nav-search-camp-name">
          {props.camp.name}
        </div>
        <div className="nav-search-camp-info">{props.camp.type} in {props.camp.state}</div>
      </div>
      <img src={props.camp.photo} alt={`${props.camp.name} thumbnail preview`} />
    </li>
  );
};

export default SearchResultCamp;