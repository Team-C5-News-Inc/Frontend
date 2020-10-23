// import react
import React from 'react';
// import Logo
import Logo from '../../assets/Logo/index.js'
// import menu component
import Menu from '../Menu/index.jsx'
// import search component
import Search from '../Search/index.jsx'
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
        <li className="nav__right--search">
          <Search />
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
