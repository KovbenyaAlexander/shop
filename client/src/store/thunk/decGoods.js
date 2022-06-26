import axios from "axios";

const decGoods = (goodsId) => {
  return async (dispatch, getState) => {
    const email = getState().user.email;
    const response = await axios.post(`http://localhost:5000/api/goods/dec`, {
      goodsId,
      email,
    });
  };
};

export default decGoods;
