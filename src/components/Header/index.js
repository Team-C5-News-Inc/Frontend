// import react
import React from 'react';

import '../Header/Header.styl'
import Logo from '../../assets/Logo' 

//create and export app component
const Header = () =>  (
  <header>
		<nav>
			<a href="#" className="icon_logo">
				<Logo />
			</a>
			<ul className="nav-right-section">
				<li>
					<a href="#">Search</a>
				</li>
				<li className="menu_icon">
					<a href="#">Menu</a>
				</li>
			</ul>
		</nav>
	</header>
);


export default Header;
