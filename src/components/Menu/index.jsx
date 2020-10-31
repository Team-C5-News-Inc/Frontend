// import react
import React, { useState, useContext } from 'react';
// import link
import { Link } from 'react-router-dom';
// import context
import { Context } from '../../utils/Context/index.jsx';
// import categories data
import { categories } from '../../utils/data/categories.js';
// import styles
import './styles.styl';

// create and export Home page
const Menu = () => {
  // use state
  const [showMenu, setShowMenu] = useState(undefined);
  // use context
  const { setAction } = useContext(Context);

  return (
    <>
      <i
        onClick={() => setShowMenu((value) => !value)}
        className="fa fa-angle-down fa-4x"
      />
      <div className={`menu ${showMenu ? 'slide-left' : 'slide-right'}`}>
        <ul className="menu__list">
          {categories?.map((category, i) => (
            <li key={i} className="menu__list-item">
              <Link
                className="menu__list-link"
                to="/"
                onClick={() => setAction({ option: 2, action: `${category}` })}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;

/**
 *           <li className="menu__list-item">
            <Link to="/" onClick={() => setAction({ option: 2, action: 'Mundo' })}>
              Mundo
            </Link>
          </li>
 */
