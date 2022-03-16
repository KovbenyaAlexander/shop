import React, { useState } from 'react';
import CallingSVG from '../SVG/CallingSVG';
import './style.scss';

const Header = (): JSX.Element => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInputValue(event.target.value);
  };

  return (
    <header className="header">
      <div className="wrapper">
        <h1 className="h1">restaurant</h1>

        <div className="logo">
          <p>LOGOS</p>
        </div>

        <input className="search-input" type="text" value={searchInputValue} onChange={onInputChangeHandler} />

        <div className="contacts">
          <CallingSVG />
          <div className="contacts__phone">
            <p>Контакты</p>
            <p>+7 (999) 999-99-99</p>
          </div>
        </div>

        <div className="cart">
          <button type="button">
            Корзина
            <span>7</span>
          </button>
        </div>
      </div>

    </header>
  );
};

export default Header;
