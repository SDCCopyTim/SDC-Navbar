import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import SearchResults from './SearchResults.jsx';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [locations, setLocations] = useState([]);
  const [camps, setCamps] = useState([]);

  // Debounce function for search
  let debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      if (timeout) { clearTimeout(timeout); }
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  };

  // Axios request to the locations and camps database with a delay to account for search time
  let onChange = (term) => {
    if (term.length !== 0) {
      axios.get(`/api/search/locations/${term}`)
        .then(results => setLocations(results.data))
        .then(() => {
          axios.get(`/api/search/camps/${term}`)
            .then(results => setCamps(results.data));
        });
    }
    if (term.length < 1) {
      setLocations([]);
      setCamps([]);
    }
  };

  const debounceOnChange = React.useCallback(debounce(onChange, 500), []);

  return (
    <form>
      <div className="nav-search-container">
        <FaSearch />
        <input
          type="text"
          placeholder="Try Yosemite, Napa, Moab..."
          onChange={e => debounceOnChange(e.target.value)}
        />
        {locations.length || camps.length ? <SearchResults locations={locations} camps={camps} /> : ''}
      </div>
    </form>
  );
};

export default Search;