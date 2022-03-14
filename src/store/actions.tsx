import { Actions, IUser } from '../types';
import { AllActions } from './reducers';

export function increment(): AllActions {
  return {
    type: Actions.INC,
  };
}

export function decrement(): AllActions {
  return {
    type: Actions.DEC,
  };
}

export function setData(payload: IUser[]): AllActions {
  return {
    type: Actions.SET_DATA,
    payload,
  };
}
