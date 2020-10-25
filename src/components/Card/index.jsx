import React from 'react';
import './styles.styl';

const Card = ({ image, title }) => {
  return (
    <div className="card" aria-label="card" >
      <div
        className="card__content"
        aria-label="card content"
      >
        <img
          aria-label="card image"
          className="card__content--image"
          src={image}
          alt={`image +${title}`}
        />
        <h2
          aria-label="image title"
          className="card__content--title"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
