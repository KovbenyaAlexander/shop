import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft, faMinus, faPlus, faCartPlus, faArrowLeftLong,
} from '@fortawesome/free-solid-svg-icons';
import { Switch, Route, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { adGoodsInCart, decreaseGoodsInCart } from '../../store/actions';
import { IFoodCard, IStore } from '../../types';
import FoodCard from '../FoodCard/FoodCard';
import './style.scss';

const ProductDescription = ({ id }: { id: string }): JSX.Element => {
  const dispatch = useDispatch();
  const foodCards = useSelector((state: IStore) => state.foodCards);
  const allCards = (Object.values(foodCards)).flat();
  const card = allCards.find((item: IFoodCard) => item.id === id);

  const addGoodsHandler = () => {
    dispatch(adGoodsInCart(card.id));
  };

  const decreaseGoodsHandler = () => {
    dispatch(decreaseGoodsInCart(card.id));
  };

  return (
    <div className="card-description">

      <div className="wrapper">
        <Link to="/" className="card-description__link-to-main">
          <FontAwesomeIcon icon={faArrowLeftLong} />
          {' '}
          вернуться назад
        </Link>
        <div className="card-description__content">
          <img src={`../${card.image}`} alt="img" className="card-description__img" />
          <div className="card-description__content-text">
            <h2>{card.name}</h2>
            <p className="card-description__descr">{card.description}</p>
            <p className="card-description__weight">
              Масса:
              {' '}
              {card.weight}
            </p>

            <table className="card-description__table">
              <thead>
                <tr>
                  <th>Белки</th>
                  <th>Калории</th>
                  <th>Жиры</th>
                  <th>Углеводы</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{card.protein}</td>
                  <td>{card.calories}</td>
                  <td>{card.fat}</td>
                  <td>{card.carbohydrates}</td>
                </tr>
              </tbody>
            </table>

            {card.numberOfPurchase > 0 ? (
              <div className="card-description__addGoodsinCart">
                <button type="button" className="btn-minus" datatype="aa" onClick={decreaseGoodsHandler}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <p className="card-description__price">
                  {card.numberOfPurchase * card.price}
                  &#x20bd;
                </p>
                <button type="button" className="btn-plus" onClick={addGoodsHandler}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            ) : (
              <div className="card-description__addGoodsinCart">
                <button type="button" onClick={addGoodsHandler}>
                  В корзину
                  {' '}
                  <FontAwesomeIcon icon={faCartPlus} className="button__icon" />
                </button>
                <p className="card-description__price">
                  {card.price}
                  &#x20bd;
                </p>
              </div>
            )}
          </div>
        </div>

        <h3>с этим товаром покупают</h3>

        <Swiper
          slidesOffsetBefore={20}
          spaceBetween={30}
          slidesPerView={4.2}
          className="card-description__swiper-container"
        >
          {allCards
            .filter((item: IFoodCard) => item.id !== card.id)
            .map((item: IFoodCard) => (
              <SwiperSlide key={item.id}>
                <FoodCard cardInfo={item} />
              </SwiperSlide>
            ))}
        </Swiper>

      </div>
    </div>

  );
};

export default ProductDescription;
