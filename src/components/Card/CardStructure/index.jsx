// import react
import React from 'react';

const CardStructure = ({ images = [], title }) => {
  const [src] = images;
  const Newsrc = (!src) ? 'https://blog.davidrojo.es/wp-content/uploads/2011/04/file-not-found.jpg' : src;

  return (
    <div className="card" aria-label="card">
      <div className="card__content" aria-label="card content">
        <img
          aria-label="card image"
          className="card__content--image"
          src={`${
            /^https?:\/\/|^http?:\/\//.test(Newsrc) ?
              Newsrc :
              `${/^www?:\/\//.test(Newsrc)}` &&
                `https://${Newsrc}`
          }`}
        />
        <h2 aria-label="image title" className="card__content--title">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CardStructure;
