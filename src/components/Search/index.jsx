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
      <div id="" className={`searchformOff ${showSearch ? 'slide_search-left searchform' : 'off'}`}>
        <input name="search" type="search" />
      </div>
      <a href="#" className="search" onClick={() => setShowSearch(value => !value)}>
        <i className="fa fa-search fa-2x" />
      </a>
    </div>
  )
}

export default Search;
