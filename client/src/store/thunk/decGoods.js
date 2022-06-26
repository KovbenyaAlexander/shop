import axios from "axios";
import { setGoods } from "../actions";

const decGoods = (goodsId) => {
  return async (dispatch, getState) => {
    const email = getState().user.email;
    const response = await axios.post(`http://localhost:5000/api/goods/dec`, {
      goodsId,
      email,
    });
    dispatch(setGoods(response.data));
  };
};

export default decGoods;
