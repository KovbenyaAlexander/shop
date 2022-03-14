import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';
import { IStore } from '../types';
import { setData } from './actions';

export const getAsyncData = function () {
  return async function (
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
    getState: () => IStore,
  ): Promise<void> {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch(setData(res.data));
  };
};
