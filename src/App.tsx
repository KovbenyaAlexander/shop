import React from 'react';
import './style.scss';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import FoodCards from './components/FoodCards/FoodCards';
import CardDescription from './components/CardDescription/CardDescription';
import Cart from './components/Cart/Cart';

const App = (): JSX.Element => (
  <div className=" app">
    <Header />

    <Route path="/" exact>
      <Promo />
      <FoodCards />
    </Route>

    <Route path="/cart" exact>
      <Cart />
    </Route>

    <Route
      path="/food/:id"
      render={({ match }) => {
        const currentID = match.params.id;
        return <CardDescription id={currentID} />;
      }}
    />

    <div className="bottom-shadow" />
  </div>
);

export default App;
