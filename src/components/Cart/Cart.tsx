/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useHistory } from 'react-router-dom';
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

      <Link to="./">к выбору блюда</Link>
      <h1>Корзина</h1>

      {allCards.map((item: IFoodCard) => {
        if (item.numberOfPurchase > 0) {
          return (
            <div>
              <div className="cart-item">
                <img src={item.image} alt="img" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div>
                  <button type="button" onClick={() => decFoodHandler(item.id)}>-</button>
                  <span>{item.numberOfPurchase}</span>
                  <button type="button" onClick={() => incFoodHandler(item.id)}>+</button>
                </div>

                <span>
                  {item.price * item.numberOfPurchase}
                </span>

                <button type="button" onClick={() => deleteFoodHandler(item.id)}>Cancel</button>
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

          {finalCost < 1499 ? <p>Минимальная сума заказа 1500&#x20bd;</p> : null}

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
  );
};

export default Cart;
