import React from 'react';
import './style.scss';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import FoodCards from './components/FoodCards/FoodCards';
import ProductDescription from './components/ProductDescription/ProductDescription';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

const App = (): JSX.Element => (
  <div className=" app">
    <Header />

    <Route path="/" exact>
      <Promo />
      <FoodCards />
      <About />
      <Contacts />
      <Footer />
    </Route>

    <Route path="/cart" exact>
      <Cart />
    </Route>

    <Route
      path="/food/:id"
      render={({ match }) => {
        const currentID = match.params.id;
        return (
          <>
            <ProductDescription id={currentID} />
            <Contacts />
            <Footer />
          </>
        );
      }}
    />

    <div className="bottom-shadow" />
  </div>
);

export default App;
