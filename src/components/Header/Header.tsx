import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { IStore } from '../../types';
import CallingSVG from '../SVG/CallingSVG';
import './style.scss';

const Header = (): JSX.Element => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const orderSize = useSelector((state: IStore) => state.orderSize);

  const history = useHistory();

  const onInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInputValue(event.target.value);
  };

  const onCartClickHandler = () => {
    history.push('/cart');
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

        <button type="button" className="cart-btn" onClick={onCartClickHandler}>
          Корзина
          {orderSize > 0 && (<span className="cart-btn__counter">{orderSize}</span>)}
        </button>

      </div>

    </header>
  );
};

export default Header;
