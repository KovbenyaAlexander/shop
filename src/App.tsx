import React from 'react';
import './style.scss';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import FoodCards from './components/FoodCards/FoodCards';
import ProductDescription from './components/ProductDescription/ProductDescription';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

import Cart from './Pages/Cart/Cart';
import Main from './Pages/Main/Main';
import FoodDescription from './Pages/FoodDescription/FoodDescription';

const App = (): JSX.Element => (
  <div className="app">
    <Header />

    <Route path="/" exact>
      <Main />
    </Route>

    <Route path="/cart" exact>
      <Cart />
      <Footer />
    </Route>

    <Route
      path="/food/:id"
      render={({ match }) => {
        const currentID = match.params.id;
        return (
          <>
            <FoodDescription id={currentID} />
          </>
        );
      }}
    />

    <div className="bottom-shadow" />
  </div>
);

export default App;
