import React from 'react';
import './styles.styl';

const Card = ({ image, title, url }) => {
  return (
    <div className="card">
      <div className="card__content">
        <a href={url}>
          <img className="card__content--image" src={image}/>
          <h2 className="card__content--title">{title}</h2>
        </a>
      </div>
    </div>
  )
}

export default Card;
