import {
  Actions, IStore, IUser, IFoodCard,
} from '../types';
import { initialStore } from './initialStore';

export type AllActions =
  { type: typeof Actions.INC } |
  { type: typeof Actions.DEC } |
  { type: typeof Actions.SET_DATA, payload: IUser[] } |
  { type: typeof Actions.ADDGOODSINCART, payload: string } |
  { type: typeof Actions.DECREASE_GOODSINCART, payload: string };

export default function reducer(state: IStore = initialStore, action: AllActions): IStore {
  switch (action.type) {
    case Actions.INC:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case Actions.DEC:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case Actions.SET_DATA:
      return {
        ...state,
        dataFromApi: action.payload,
      };

    case Actions.ADDGOODSINCART:
      return {
        ...state,
        orderSize: state.orderSize + 1,
        foodCards: {
          cold: state.foodCards.cold.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                numberOfPurchase: item.numberOfPurchase + 1,
              };
            }
            return item;
          }),
          hot: state.foodCards.hot.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                numberOfPurchase: item.numberOfPurchase + 1,
              };
            }
            return item;
          }),
          meet: state.foodCards.meet.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
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
    default:
      return state;
  }
}
