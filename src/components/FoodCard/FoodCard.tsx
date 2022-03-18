import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IFoodCard, IFoodCards, IStore } from '../../types';
import { adGoodsInCart, decreaseGoodsInCart } from '../../store/actions';
import 'swiper/css';

const FoodCard = ({ cardInfo } : { cardInfo: IFoodCard }): JSX.Element => {
  const dispatch = useDispatch();

  const addGoodsHandler = () => {
    dispatch(adGoodsInCart(cardInfo.id));
  };

  const decreaseGoodsHandler = () => {
    dispatch(decreaseGoodsInCart(cardInfo.id));
  };

  return (
    <div className="card">
      <img src={cardInfo.image} alt="food" />
      <p>{cardInfo.name}</p>
      <p>{cardInfo.description}</p>
      <p>{cardInfo.price}</p>
      <p>{cardInfo.weight}</p>

      {cardInfo.numberOfPurchase > 0 ? (
        <div>
          <button type="button" onClick={addGoodsHandler}>+</button>
          <p>{cardInfo.numberOfPurchase * cardInfo.price}</p>
          <button type="button" onClick={decreaseGoodsHandler}>-</button>
        </div>
      ) : <div><button type="button" onClick={addGoodsHandler}>В корзину</button></div>}

    </div>
  );
};

export default FoodCard;
