import { Actions, IStore, IFoodCard, IUSER, IGoods } from "../types";
import { initialStore } from "./initialStore";

export type AllActions =
  | { type: typeof Actions.ADDGOODSINCART; payload: string }
  | { type: typeof Actions.DECREASE_GOODSINCART; payload: string }
  | { type: typeof Actions.DELETE_FOOD_FROM_CART; payload: string }
  | { type: typeof Actions.TOGGLE_BURGER }
  | { type: typeof Actions.CLOSE_BURGER }
  | { type: typeof Actions.LOGOUT }
  | { type: typeof Actions.SET_USER; payload: IUSER }
  | { type: typeof Actions.SET_GOODS; payload: IGoods };

export default function reducer(
  state: IStore = initialStore,
  action: AllActions
): IStore {
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
    case Actions.TOGGLE_BURGER: {
      return {
        ...state,
        isBurgerOpen: !state.isBurgerOpen,
      };
    }

    case Actions.CLOSE_BURGER: {
      return {
        ...state,
        isBurgerOpen: false,
      };
    }

    case Actions.SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case Actions.LOGOUT: {
      return {
        ...state,
        user: {
          id: "",
          email: "",
          accessToken: "",
          refreshToken: "",
          goods: {},
        },
      };
    }

    case Actions.SET_GOODS: {
      return {
        ...state,
        user: {
          ...state.user,
          goods: action.payload,
        },
      };
    }

    default:
      return state;
  }
}
