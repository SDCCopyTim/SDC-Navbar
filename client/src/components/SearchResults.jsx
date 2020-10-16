import React from 'react';
import SearchResultLocation from './SearchResultLocation.jsx';
import SearchResultCamp from './SearchResultCamp.jsx';
import { FaCampground } from 'react-icons/fa';


// Available props: camps (array), locations (array)
const SearchResults = (props) => {

  return (
    <div className="nav-search-results-dropdown">
      <ul>
        {props.locations.map((location, index) => {
          return <SearchResultLocation key={index} location={location}/>;
        })}
        {props.camps.map((camp, index) => {
          return <SearchResultCamp key={index} camp={camp}/>;
        })}
      </ul>
    </div>
  );
};

export default SearchResults;