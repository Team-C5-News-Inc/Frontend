// import react
import React from 'react';
// import Logo
import Logo from '../../assets/Logo'
// import menu component
import Menu from '../Menu/index.jsx'
// import header styles
import './styles.styl'

//create and export app component
const Header = () => (
  <header className="header">
    <nav className="nav">
      <a href="#">
        <Logo className="nav__logo"/>
      </a>
      <ul className="nav__right">
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
        <li className="nav__right--menu">
          <span href="#" id="arrow">
            <Menu />
          </span>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
