import { Actions } from "../types";
import { AllActions } from "./reducers";

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

export function toggleBurger(): AllActions {
  return {
    type: Actions.TOGGLE_BURGER,
  };
}

export function closeBurger(): AllActions {
  return {
    type: Actions.CLOSE_BURGER,
  };
}

export function logout(): AllActions {
  return {
    type: Actions.LOGOUT,
  };
}

export function setToken(token: string): AllActions {
  return {
    type: Actions.SET_TOKEN,
    payload: token,
  };
}
