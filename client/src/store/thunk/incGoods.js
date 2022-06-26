import axios from "axios";
import { setGoods } from "../actions";

const incGoods = (goodsId) => {
  return async (dispatch, getState) => {
    const email = getState().user.email;
    const response = await axios.post(`http://localhost:5000/api/goods/inc`, {
      goodsId,
      email,
    });

    dispatch(setGoods(response.data));
  };
};

export default incGoods;
