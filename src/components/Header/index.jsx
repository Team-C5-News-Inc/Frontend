// import react
import React from 'react';
// import Logo
import Logo from '../../assets/Logo'
// import menu component
import Menu from '../Menu/index.jsx'
// import header styles
import './Header.styl'

//create and export app component
const Header = () => (
  <header>
    <nav>
      <a href="#">
        <Logo />
      </a>
      <ul className="nav-right-section">
        <li>
          <div className="searchContainer">
            <div id="searchform" className="searchform">
              <form action="#" name="top_search">
                <input className="searchbox" name="q" type="search" />
              </form>
            </div>
            <span href="#" className="search">
              <i className="fa fa-search fa-2x" />
            </span>

          </div>
        </li>
        <li className="menu_icon">
          <span href="#" id="arrow">
            <Menu />
          </span>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
