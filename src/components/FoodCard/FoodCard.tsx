import React from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IFoodCard } from '../../types';
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
      <img className="card__img" src={cardInfo.image} alt="food" />
      <div className="card__header">
        <span className="card__name">{cardInfo.name}</span>
        <p className="card__weight">
          Масса:
          {' '}
          {cardInfo.weight}
        </p>
      </div>

      <p className="card__description">{cardInfo.description}</p>

      {cardInfo.numberOfPurchase > 0 ? (
        <div className="card__addGoodsinCart">
          <button type="button" className="btn-minus" onClick={decreaseGoodsHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <p className="card__price">
            {cardInfo.numberOfPurchase * cardInfo.price}
            &#x20bd;
          </p>
          <button type="button" className="btn-plus" onClick={addGoodsHandler}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      ) : (
        <div className="card__addGoodsinCart">
          <p className="card__price">
            {cardInfo.price}
            &#x20bd;
          </p>
          <button type="button" onClick={addGoodsHandler}>
            В корзину
            {' '}
            <FontAwesomeIcon icon={faCartPlus} className="button__icon" />
          </button>
        </div>
      )}

    </div>
  );
};

export default FoodCard;
