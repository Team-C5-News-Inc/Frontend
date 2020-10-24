// import react
import React from 'react';
// import link component
import { Link } from 'react-router-dom';
// import icons
const Facebook = 'https://www.flaticon.es/svg/static/icons/svg/733/733605.svg';
const Twitter = 'https://www.flaticon.es/svg/static/icons/svg/733/733635.svg';
const Instagram = 'https://www.flaticon.es/svg/static/icons/svg/87/87390.svg';
// import logo
import Logo from '../../assets/Logo/index.js';
// import styles
import './styles.styl';

const Footer = () => (
  <footer className="footer">
    <div className="footer__social">
      <img className="footer__social--icons" src={Facebook} alt="Facebook" />
      <img className="footer__social--icons" src={Twitter} alt="Twitter" />
      <img className="footer__social--icons" src={Instagram} alt="Instagram" />
    </div>
    <Logo className="footer__logo" />
    <div className="footer__subtitle">
      <Link className="about-link" to="/about">
        <h2>About</h2>
      </Link>
      <Link className="team-link" to="/team">
        <h2>Team</h2>
      </Link>
    </div>
    <p className="footer__comments">
			2020 by Masters INC. Proudly created with React JS
    </p>
  </footer>
);

export default Footer;
