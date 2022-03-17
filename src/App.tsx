import React from 'react';
import './style.scss';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';

const App = (): JSX.Element => (
  <div className=" app">
    <Header />
    <Promo />
  </div>
);

export default App;
