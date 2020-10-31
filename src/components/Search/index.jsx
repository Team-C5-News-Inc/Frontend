// import react
import React, { useState, useContext } from 'react';
// import context
import { Context } from '../../utils/Context/index.jsx';
// import styles
import './styles.styl';

// create and export Search page
const Search = () => {
  // use state
  const [showSearch, setShowSearch] = useState(false);
  // use state
  const [search, setSearch] = useState('');
  // use context
  const { setAction } = useContext(Context);

  const callAPI = (value) => {
    setAction({ option: 3, action: `'&${value}'`, redirect: true });

    setSearch('')
  };

  return (
    <div>
      <div
        className={`searchformOff ${
          showSearch ? 'slide_search-left searchform' : 'off'
        }`}
      >
        <input
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              callAPI(search)
              ev.preventDefault();
            }
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          type="search"
          placeholder="Search"
        />
      </div>
      <a className="search" onClick={() => setShowSearch((value) => !value)}>
        <i className="fa fa-search fa-2x" />
      </a>
    </div>
  );
};

export default Search;
