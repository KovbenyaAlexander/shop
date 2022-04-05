/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  faArrowLeft, faMinus, faPlus, faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IFoodCard, IStore } from '../../types';

import { adGoodsInCart, decreaseGoodsInCart, deleteFoodFromCart } from '../../store/actions';
import './style.scss';

import 'swiper/css';

const Cart = (): JSX.Element => {
  const foodCards = useSelector((state: IStore) => state.foodCards);
  const allCards = (Object.values(foodCards)).flat();

  const dispatch = useDispatch();

  const incFoodHandler = (id: string) => {
    dispatch(adGoodsInCart(id));
  };

  const decFoodHandler = (id: string) => {
    dispatch(decreaseGoodsInCart(id));
  };

  const deleteFoodHandler = (id: string) => {
    dispatch(deleteFoodFromCart(id));
  };

  const finalCost = allCards.reduce((acc: number, item: IFoodCard) => acc + item.price * item.numberOfPurchase, 0);

  return (

    <div className="cart">
      <div className="wrapper">
        <Link className="cart__link-to-main" to="./">
          <FontAwesomeIcon icon={faArrowLeft} />
          {' '}
          к выбору блюда

        </Link>
        <h1>Корзина</h1>

        {allCards.map((item: IFoodCard) => {
          if (item.numberOfPurchase > 0) {
            return (
              <div key={item.id}>
                <div className="cart-item">
                  <img className="cart-item__img" src={item.image} alt="img" />
                  <div className="cart-item__description">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div className="cart-item__controls">
                    <div>
                      <button type="button" onClick={() => decFoodHandler(item.id)}>
                        <FontAwesomeIcon data-isbtn="true" icon={faMinus} />
                      </button>
                      <span className="cart-item__price">{item.numberOfPurchase}</span>
                      <button type="button" onClick={() => incFoodHandler(item.id)}>
                        <FontAwesomeIcon data-isbtn="true" icon={faPlus} />
                      </button>
                    </div>

                    <span>
                      {item.price * item.numberOfPurchase}
                    </span>

                    <button type="button" onClick={() => deleteFoodHandler(item.id)}>
                      <FontAwesomeIcon data-isbtn="true" icon={faXmark} />
                    </button>
                  </div>
                </div>

              </div>

            );
          }
          return null;
        })}

        <div className="cart-total">
          <div>
            <span>Итого:</span>
            <span>{finalCost}</span>

            {finalCost < 1499 ? <p className="cart__error-msg">Минимальная сума заказа 1500&#x20bd;</p> : null}

          </div>
          {finalCost < 1499
            ? (
              <button disabled type="button" className="cart-total__btn"> go</button>
            )
            : (
              <NavLink to="./order">
                <button className="cart-total__btn cart-total__btn-active" type="button"> go</button>
              </NavLink>
            )}

        </div>
      </div>

    </div>
  );
};

export default Cart;