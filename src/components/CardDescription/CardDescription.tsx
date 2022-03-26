import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import { IFoodCard, IStore } from '../../types';
import './style.scss';

const CardDescription = ({ id }: { id: string }): JSX.Element => {
  const foodCards = useSelector((state: IStore) => state.foodCards);
  const allCards = (Object.values(foodCards)).flat();
  const card = allCards.find((item: IFoodCard) => item.id === id);

  return (
    <div className="card-description">

      <div className="wrapper">
        <Link to="/">GO BACK</Link>
        <div className="card-description__content">
          <img src={`../${card.image}`} alt="img" />
          <div className="card-description__content-text">
            <h2>{card.name}</h2>
            <p>{card.description}</p>
            <p>
              Масса:
              {' '}
              {card.weight}
            </p>
            <p>
              {card.price}
              &#x20bd;
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
          </div>
        </div>
      </div>

    </div>

  );
};

export default CardDescription;
