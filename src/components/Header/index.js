// import react
import React from 'react';

import '../Header/Header.styl'
import Logo from '../../assets/Logo'
//import arrow from '../../assets/arrow2.png'

//create and export app component
const Header = () =>  (
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
							<i className="fa fa-search fa-2x"></i>
						</a>
					
					</div> 
				</li>
				<li className="menu_icon">
					<a href="#" id="arrow">
						<i className="fa fa-angle-down fa-4x"></i>
					</a>
				</li>
			</ul>
		</nav>
	</header>
);


export default Header;
