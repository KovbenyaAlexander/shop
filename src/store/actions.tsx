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

export function adGoodsInCart(payload: string): AllActions {
  return {
    type: Actions.ADDGOODSINCART,
    payload,
  };
}

export function decreaseGoodsInCart(payload: string): AllActions {
  return {
    type: Actions.DECREASE_GOODSINCART,
    payload,
  };
}

export function deleteFoodFromCart(payload: string): AllActions {
  return {
    type: Actions.DELETE_FOOD_FROM_CART,
    payload,
  };
}
