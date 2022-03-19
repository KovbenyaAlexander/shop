import React from 'react';
import './style.scss';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import FoodCards from './components/FoodCards/FoodCards';

const App = (): JSX.Element => (
  <div className=" app">
    <Header />
    <Promo />
    <FoodCards />
  </div>
);

export default App;
