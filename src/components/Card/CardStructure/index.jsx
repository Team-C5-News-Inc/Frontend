// import react
import React from 'react';

const CardStructure = ({ images = [], title }) => {
  const [src] = images;

  return (
    <div className="card" aria-label="card">
      <div className="card__content" aria-label="card content">
        <img
          aria-label="card image"
          className="card__content--image"
          src={`${
            /^https?:\/\/|^http?:\/\//.test(src) ?
              src :
              `${/^www?:\/\//.test(src)}` &&
                `https://${src}`
          }`}
          alt={`image +${title}`}
        />
        <h2 aria-label="image title" className="card__content--title">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CardStructure;
