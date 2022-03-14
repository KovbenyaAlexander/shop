import React from 'react';
import Counter from './components/Counter';
import Async from './components/Async';
import './style.scss';

const App = (): JSX.Element => (
  <div className="app">
    <Counter />
    <hr />
    <Async />
  </div>
);

export default App;
