import React from 'react';
import './styles.styl';

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <div className="card__content">
        <img className="card__content--image" src={image}/>
        <h2 className="card__content--title">{title}</h2>
      </div>
    </div>
  )
}

export default Card;
