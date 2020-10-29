// import react
import React from 'react';
// import link component
import { Link } from 'react-router-dom';
// import icons
const Platzi = 'https://static.platzi.com/mf-landings/image/isotipoPlatzi-442ccc1186a9806e18c9889cc301ffe1.png';
const GitHub = 'https://www.flaticon.es/svg/static/icons/svg/733/733609.svg';
const Notion = 'https://yt3.ggpht.com/a/AATXAJzPBXMraj8Xr2kYz3zAGBE8I4RbIRMHV1aY2Bu8dw=s88-c-k-c0x00ffffff-no-rj';
// import logo
import Logo from '../../assets/Logo/index.js';
// import styles
import './styles.styl';

const Footer = () => (
  <footer className="footer">
    <div className="footer__social">
      <a href="https://platzi.com/home" target="_blank">
        <img className="footer__social--icons" src={Platzi} alt="Platzi" />
      </a>
      <a href="https://github.com/Team-C5-cheaPlatzi" target="_blank">
        <img className="footer__social--icons" src={GitHub} alt="GitHub" />
      </a>
      <a href="https://www.notion.so/Team-master5-7-inc-News-Inc-project-7340af6d026b4eb8a3f0099888a890a6" target="_blank">
        <img className="footer__social--icons" src={Notion} alt="Notion" />
      </a>
    </div>
    <Logo className="footer__logo" />
    <div className="footer__subtitle">
      <Link className="about-link" to="/about">
        <h2>About</h2>
      </Link>
      <Link className="policy-link" to="/Privacy_Policy">
        <h2>Privacy Policy</h2>
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
