// import react
import React from 'react';
// import Logo
import Logo from '../../assets/Logo'
// import header styles
import '../Header/Header.styl'

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
            <a href="#" className="search">
              <i className="fa fa-search fa-2x" />
            </a>

          </div>
        </li>
        <li className="menu_icon">
          <a href="#" id="arrow">
            <i className="fa fa-angle-down fa-4x" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
