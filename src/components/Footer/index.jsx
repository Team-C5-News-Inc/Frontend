import React from 'react';
const Facebook = 'https://www.flaticon.es/svg/static/icons/svg/733/733605.svg';
const Twitter = 'https://www.flaticon.es/svg/static/icons/svg/733/733635.svg';
const Instagram = 'https://www.flaticon.es/svg/static/icons/svg/87/87390.svg';
import './styles.styl';


const Footer = () => (
    <footer className='footer'>
        <div className='footer__social'>
            <img className='footer__social--icons' src={Facebook} alt="Facebook"/>
            <img className='footer__social--icons' src={Twitter} alt="Twitter"/>
            <img className='footer__social--icons' src={Instagram} alt="Instagram"/>
        </div>
        <h1 className='footer__title'>
            PLATZI NEWS
        </h1>
        <div className='footer__subtitle'>
            <h2>
                About
            </h2>
            <h2>
                Team
            </h2>
        </div>
            <p className='footer__comments'>
                2020 by Masters INC. Proudly created with React JS
            </p>
    </footer>
);

export default Footer;