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
        orderSize: Object.values(action.payload.goods).reduce(
          (sum, item) => sum + +item,
          0
        ),
        foodCards: {
          cold: state.foodCards.cold.map((item: IFoodCard) => {
            if (Object.keys(action.payload.goods).includes(item.id)) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: Number(action.payload.goods[item.id]),
              };
            }
            return item;
          }),
          hot: state.foodCards.hot.map((item: IFoodCard) => {
            if (Object.keys(action.payload.goods).includes(item.id)) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: Number(action.payload.goods[item.id]),
              };
            }
            return item;
          }),
          meet: state.foodCards.meet.map((item: IFoodCard) => {
            if (Object.keys(action.payload.goods).includes(item.id)) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: Number(action.payload.goods[item.id]),
              };
            }
            return item;
          }),
        },
      };
    }

    case Actions.LOGOUT: {
      return {
        ...initialStore,
      };
    }

    case Actions.SET_GOODS: {
      return {
        ...state,

        user: {
          ...state.user,
          goods: action.payload,
        },
        orderSize: Object.values(action.payload).reduce(
          (sum, item) => sum + +item,
          0
        ),
        foodCards: {
          cold: state.foodCards.cold.map((item: IFoodCard) => {
            if (Object.keys(action.payload).includes(item.id)) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: Number(action.payload[item.id]),
              };
            }
            return {
              ...item,
              inCart: false,
              numberOfPurchase: 0,
            };
          }),
          hot: state.foodCards.hot.map((item: IFoodCard) => {
            if (Object.keys(action.payload).includes(item.id)) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: Number(action.payload[item.id]),
              };
            }
            return {
              ...item,
              inCart: false,
              numberOfPurchase: 0,
            };
          }),
          meet: state.foodCards.meet.map((item: IFoodCard) => {
            if (Object.keys(action.payload).includes(item.id)) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: Number(action.payload[item.id]),
              };
            }
            return {
              ...item,
              inCart: false,
              numberOfPurchase: 0,
            };
          }),
        },
      };
    }

    default:
      return state;
  }
}
