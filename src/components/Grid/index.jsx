// import React
import React from 'react';
// import masonry
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
// import card
import Card from '../Card/index.jsx';
// import styles
import './styles.styl';

const Grid = () => {
  return (
    <div className="masonry">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 480: 1, 700: 2, 1000: 3 }}
      >
        <Masonry gutter="20px">
          <Card title="Milos Foreman saca un nuevo disco" image="https://i.imgur.com/umQqEfs.png"/>
          <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/ZiGz0xk.jpg"/>
          <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/RbQI86x.jpg"/>
          <Card title="Milos Foreman saca un nuevo disco" image="https://i.imgur.com/QORYDiJ.jpg"/>
          <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/zGDQOk1.jpg"/>
          <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/7WYSsLw.jpg"/>
          <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/9A6mOm0.jpg"/>
          <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/5tzodZa.jpg"/>
          <Card title="Milos Foreman saca un nuevo disco" image="https://i.imgur.com/umQqEfs.png"/>
          <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/ZiGz0xk.jpg"/>
          <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/RbQI86x.jpg"/>
          <Card title="Milos Foreman saca un nuevo disco" image="https://i.imgur.com/QORYDiJ.jpg"/>
          <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/zGDQOk1.jpg"/>
          <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/7WYSsLw.jpg"/>
          <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/9A6mOm0.jpg"/>
          <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/5tzodZa.jpg"/>
          <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/9A6mOm0.jpg"/>
          <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/5tzodZa.jpg"/>
          <Card title="Milos Foreman saca un nuevo disco" image="https://i.imgur.com/umQqEfs.png"/>
          <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/ZiGz0xk.jpg"/>
          <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/RbQI86x.jpg"/>
          <Card title="Milos Foreman saca un nuevo disco" image="https://i.imgur.com/QORYDiJ.jpg"/>
          <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/zGDQOk1.jpg"/>
          <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/7WYSsLw.jpg"/>
          <Card title="Jorge Garcia saca a pasear a la cheve" image="https://i.imgur.com/9A6mOm0.jpg"/>
          <Card title="Edicion 20 de checa mi setup" image="https://i.imgur.com/5tzodZa.jpg"/>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Grid;
