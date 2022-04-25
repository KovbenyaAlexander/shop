import {
  Actions, IStore, IFoodCard,
} from '../types';
import { initialStore } from './initialStore';

export type AllActions =
  { type: typeof Actions.ADDGOODSINCART, payload: string } |
  { type: typeof Actions.DECREASE_GOODSINCART, payload: string } |
  { type: typeof Actions.DELETE_FOOD_FROM_CART, payload: string } |
  { type: typeof Actions.TOGGLE_MODAL } |
  { type: typeof Actions.CLOSE_MODAL };

export default function reducer(state: IStore = initialStore, action: AllActions): IStore {
  switch (action.type) {
    case Actions.ADDGOODSINCART:
      return {
        ...state,
        orderSize: state.orderSize + 1,
        foodCards: {
          cold: state.foodCards.cold.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: item.numberOfPurchase + 1,
              };
            }
            return item;
          }),
          hot: state.foodCards.hot.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: item.numberOfPurchase + 1,
              };
            }
            return item;
          }),
          meet: state.foodCards.meet.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: item.numberOfPurchase + 1,
              };
            }
            return item;
          }),
        },
      };
    case Actions.DECREASE_GOODSINCART: {
      return {
        ...state,
        orderSize: state.orderSize - 1,
        foodCards: {
          cold: state.foodCards.cold.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                numberOfPurchase: item.numberOfPurchase - 1,
              };
            }
            return item;
          }),
          hot: state.foodCards.hot.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                numberOfPurchase: item.numberOfPurchase - 1,
              };
            }
            return item;
          }),
          meet: state.foodCards.meet.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                numberOfPurchase: item.numberOfPurchase - 1,
              };
            }
            return item;
          }),
        },
      };
    }
    case Actions.DELETE_FOOD_FROM_CART: {
      let prevCountOfPurchase = 0;
      const newState = {
        ...state,

        foodCards: {
          cold: state.foodCards.cold.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              prevCountOfPurchase = item.numberOfPurchase;
              return {
                ...item,
                inCart: false,
                numberOfPurchase: 0,
              };
            }
            return item;
          }),
          hot: state.foodCards.hot.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              prevCountOfPurchase = item.numberOfPurchase;
              return {
                ...item,
                inCart: false,
                numberOfPurchase: 0,
              };
            }
            return item;
          }),
          meet: state.foodCards.meet.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              prevCountOfPurchase = item.numberOfPurchase;
              return {
                ...item,
                inCart: false,
                numberOfPurchase: 0,
              };
            }
            return item;
          }),
        },
      };
      newState.orderSize -= prevCountOfPurchase;
      return newState;
    }
    case Actions.TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case Actions.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
}