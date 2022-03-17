import React, { useState } from 'react';
import CallingSVG from '../SVG/CallingSVG';
import './style.scss';

const Promo = (): JSX.Element => {
  const [searchInputValue, setSearchInputValue] = useState('');

  return (
    <section className="promo">

      <div className="wrapper">
        <div className="promo-text">
          <p>Доставка вкуснейших блюд за 60 минут</p>
        </div>
      </div>

    </section>
  );
};

export default Promo;
