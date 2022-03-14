import { Actions, IStore, IUser } from '../types';
import { initialStore } from './initialStore';

export type AllActions =
  { type: typeof Actions.INC } |
  { type: typeof Actions.DEC } |
  { type: typeof Actions.SET_DATA, payload: IUser[] };

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
    default:
      return state;
  }
}
