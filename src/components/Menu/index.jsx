// import react
import React, { useState } from 'react';
// import styles
import './styles.styl'

// create and export Home page
const Menu = () => {
  // use state
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <i onClick={() => setShowMenu(value => !value)} className="fa fa-angle-down fa-4x" />
      <div className={`menu ${showMenu ? 'slide-left' : 'slide-right'}`}>
        <ul className="menu__list">
          <li className="menu__list-item">Category</li>
          <li className="menu__list-item">Category</li>
          <li className="menu__list-item">Category</li>
          <li className="menu__list-item">Category</li>
          <li className="menu__list-item">Category</li>
          <li className="menu__list-item">Category</li>
          <li className="menu__list-item">Category</li>
          <li className="menu__list-item">Category</li>
        </ul>
      </div>
    </>
  )
}

export default Menu;
