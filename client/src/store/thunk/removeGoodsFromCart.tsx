import axios from "axios";
import { setGoods } from "../actions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { IStore } from "../../types/store-types";

const removeGoodsFromCart = (goodsId: string) => {
  return async (
    dispatch: ThunkDispatch<void, IStore, AnyAction>,
    getState: () => IStore
  ) => {
    try {
      const email = getState().user.email;
      const response = await axios.post(
        `${process.env.REACT_APP_SERVR_URL}/goods/remove`,
        {
          goodsId,
          email,
        }
      );
      dispatch(setGoods(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export default removeGoodsFromCart;
