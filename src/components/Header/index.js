// import react
import React from 'react';

import '../Header/Header.styl'
import Logo from '../../assets/Logo'
//import arrow from '../../assets/arrow.svg'

//create and export app component
const Header = () =>  (
  <header>
		<nav>
			<a href="#" className="icon_logo">
				<Logo />
			</a>
			<ul className="nav-right-section">
				<li className="search">
					<div> 
					<a href="#">
  						<img src="" alt="" />
  					Search
					</a>
					</div> 
				</li>
				<li className="menu_icon">
					<a href="#">Menu</a>
				</li>
			</ul>
		</nav>
	</header>
);


export default Header;
