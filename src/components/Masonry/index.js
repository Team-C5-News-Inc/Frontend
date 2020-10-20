import React from 'react';
import Card from '../Card';
import './styles.styl';

const Masonry = () => {
  return (
    <section className="masonry">
      <Card/>
      <Card/>
      <Card/>
    </section>
  );
};

export default Masonry;
