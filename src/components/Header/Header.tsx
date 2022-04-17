import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IStore } from '../../types';

import './style.scss';

const Header = (): JSX.Element => {
  const orderSize = useSelector((state: IStore) => state.orderSize);
  const history = useHistory();

  const onCartClickHandler = () => {
    history.push('/cart');
  };

  return (
    <header className="header">
      <div className="wrapper">

        <div className="logo">
          <h1>LOGOS</h1>
        </div>

        <div className="header__contacts">
          <FontAwesomeIcon icon={faPhone} className="header__icon" />
          <div className="header__phone">
            <p className="header__phone-description">Контакты</p>
            <p className="header__phone-number"> +7 (999) 999-99-99</p>
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
