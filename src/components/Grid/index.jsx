// import React
import React, { useState as state } from 'react';
// import masonry
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
// import card
import Card from '../Card/index.jsx';
// import styles
import './styles.styl';

const Grid = () => {
  const [cards] = state([
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
    { title: 'Milos Foreman saca un nuevo disco', image: 'https://i.imgur.com/umQqEfs.png' },
    { title: 'Jorge Garcia saca a pasear a la cheve', image: 'https://i.imgur.com/RbQI86x.jpg' },
    { title: 'Edicion 20 de checa mi setup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQBukfR9UCGacz-cK1lAv7GN74CV85q9E0bw&usqp=CAU' },
  ])

  return (
    <div className="masonry">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 480: 1, 700: 2, 1000: 3 }}
      >
        <Masonry gutter="20px">
          {cards.map((card, i) => <Card key={i} title={card?.title} image={card?.image} />)}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Grid;
