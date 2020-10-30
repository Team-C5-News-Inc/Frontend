// import react
import React from 'react';
//import styles
import './styles.styl';

const SearchF = ({ message, subtitle }) => (
  <div className="searchF">
    <h1 className="searchF__title">{message}</h1>
    <h2 className="searchF__subtitle">{subtitle}</h2>
  </div>
)

export default SearchF;
