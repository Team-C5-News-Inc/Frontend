// import react
import React from 'react';

const CardStructure = ({ images = ['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80'], title }) => {
  const [src] = images

  return (
    <div className="card" aria-label="card" >
      <div
        className="card__content"
        aria-label="card content"
      >
        <img
          aria-label="card image"
          className="card__content--image"
          src={`http://${src}`}
          alt={`not found +${title}`}
        />
        <h2
          aria-label="image title"
          className="card__content--title"
        >
          {title}
        </h2>
      </div>
    </div>
  )
}

export default CardStructure;
