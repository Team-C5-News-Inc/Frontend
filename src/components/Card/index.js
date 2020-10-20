import React from 'react';
import './styles.styl';

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <div className="card__content">
        <a href="">
          <img className="card__content--image" src={image}/>
          <h2 className="card__content--title">{title}</h2>
        </a>
      </div>
    </div>
  )
}

export default Card;
