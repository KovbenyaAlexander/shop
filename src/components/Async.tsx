import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAsyncData } from '../store/thunk';
import { IStore, IUser } from '../types';

const Counter = (): JSX.Element => {
  const dispatch = useDispatch();
  const data = useSelector((state: IStore) => state.dataFromApi);

  const onClickHandler = () => {
    dispatch(getAsyncData());
  };

  return (
    <div>
      <button type="button" onClick={onClickHandler}>GET ASYNC DATA</button>
      {data.map((item: IUser) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
};

export default Counter;
