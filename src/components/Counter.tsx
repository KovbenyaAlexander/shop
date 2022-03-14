import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../types';
import { decrement, increment } from '../store/actions';

const Counter = (): JSX.Element => {
  const dispatch = useDispatch();
  const counter = useSelector((state: IStore) => state.counter);

  const incHandler = () => {
    dispatch(increment());
  };

  const decHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      {counter}
      <br />
      <button type="button" onClick={incHandler}>INC</button>
      <button type="button" onClick={decHandler}>DEC</button>
    </div>
  );
};

export default Counter;
