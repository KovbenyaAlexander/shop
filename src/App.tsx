import React from 'react';
import './style.scss';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import FoodCards from './components/FoodCards/FoodCards';
import CardDescription from './components/CardDescription/CardDescription';

const App = (): JSX.Element => (
  <div className=" app">
    <Header />
    <Promo />
    <Route
      path="/food/:id"
      render={({ match }) => {
        const currentID = match.params.id;
        return <CardDescription id={currentID} />;
      }}
    />

    <FoodCards />
    <div className="bottom-shadow" />
  </div>
);

export default App;
