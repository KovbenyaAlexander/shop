import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toggleModal, closeModal } from '../../store/actions';
import { IStore } from '../../types';

import './style.scss';

const Header = (): JSX.Element => {
  const orderSize = useSelector((state: IStore) => state.orderSize);
  const history = useHistory();
  const isModalOpen = useSelector((state: IStore) => state.isModalOpen);
  const dispatch = useDispatch();

  const onCartClickHandler = () => {
    history.push('/cart');
    dispatch(closeModal());
  };

  const onClickLogoHandler = () => {
    history.push('/');
    dispatch(closeModal());
  };

  const onClickBurgerHandler = () => {
    dispatch(toggleModal());
  };

  return (
    <header className="header">
      <div className="wrapper">

        <div className="header__logo-container">
          <button
            type="button"
            className={
              isModalOpen ? 'header__burger header__burger-active' : 'header__burger'
            }
            onClick={onClickBurgerHandler}
          >
            <span />
          </button>

          <button type="button" onClick={onClickLogoHandler} className="header__logo">LOGOS</button>

        </div>

        <div className="header__contacts">
          <FontAwesomeIcon icon={faPhone} className="header__icon" />
          <div className="header__phone">
            <p className="header__phone-description">Наш телефон</p>
            <p className="header__phone-number"> +7 (999) 999-99-99</p>
          </div>
        </div>

        <button type="button" className="cart-btn" onClick={onCartClickHandler}>
          Корзина

          {orderSize > 0
            ? (
              <>
                {orderSize < 100
                  ? <span className="cart-btn__counter">{orderSize}</span>
                  : <span className="cart-btn__counter cart-btn__counter-small">99+</span>}
              </>
            )
            : null}

        </button>

      </div>

    </header>
  );
};

export default Header;
