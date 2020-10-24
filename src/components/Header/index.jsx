// import react
import React from 'react';
// import link from react router dom
import { Link } from 'react-router-dom';
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
      <Link to="/">
        <Logo className="nav__logo"/>
      </Link>
      <ul className="nav__right">
        <li className="nav__right--search">
          <Search />
        </li>
        <li className="nav__right--menu">
          <span id="arrow">
            <Menu />
          </span>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
