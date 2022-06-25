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

export function toggleModal(): AllActions {
  return {
    type: Actions.TOGGLE_MODAL,
  };
}

export function closeModal(): AllActions {
  return {
    type: Actions.CLOSE_MODAL,
  };
}
