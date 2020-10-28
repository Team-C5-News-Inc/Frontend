// import react
import React, { useState } from 'react';
// import styles
import './styles.styl'

// create and export Search page
const Search = () => {
  // use state
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <div className={`searchformOff ${showSearch ? 'slide_search-left searchform' : 'off'}`}>
        <input name="search" type="search" placeholder="Search"/>
      </div>
      <a className="search" onClick={() => setShowSearch(value => !value)}>
        <i className="fa fa-search fa-2x" />
      </a>
    </div>
  )
}

export default Search;
