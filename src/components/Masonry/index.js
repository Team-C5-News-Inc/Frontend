// import React
import React from 'react';
// import masonry library
import MasonryLayout from 'masonry-layout';
// import card
import Card from '../Card';
// import styles
import './styles.styl';

window.onload = () => {
  const grid = document.querySelector('.masonry')
  const layout = new MasonryLayout(grid, {
    itemSelector: '.card',
    gutter: 10,
  });
}

const Masonry = () => {
  return (
    <section className="masonry">
      <Card title="Milos Foreman saca un nuevo disco" image="https://i.imgur.com/umQqEfs.png"/>
      <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/ZiGz0xk.jpg"/>
      <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/RbQI86x.jpg"/>
      <Card title="Milos Foreman saca un nuevo disco" image="https://i.imgur.com/QORYDiJ.jpg" />
      <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/zGDQOk1.jpg"/>
      <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/7WYSsLw.jpg"/>
      <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/9A6mOm0.jpg"/>
      <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/5tzodZa.jpg"/>
      <Card title="Milos Foreman saca un nuevo disco" image="https://i.imgur.com/umQqEfs.png" />
      <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/ZiGz0xk.jpg"/>
      <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/RbQI86x.jpg"/>
      <Card title="Milos Foreman saca un nuevo disco" image="https://i.imgur.com/QORYDiJ.jpg" />
      <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/zGDQOk1.jpg"/>
      <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/7WYSsLw.jpg"/>
      <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/9A6mOm0.jpg"/>
      <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/5tzodZa.jpg"/>
    </section>
  );
};

export default Masonry;
