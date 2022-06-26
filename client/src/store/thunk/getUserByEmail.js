import axios from "axios";
import { setUser } from "../actions";

const getUserByEmail = (email, token) => {
  return async (dispatch, getState) => {
    const response = await axios.post(`http://localhost:5000/api/getUser`, {
      email,
      token,
    });
    dispatch(setUser(response.data));
  };
};

export default getUserByEmail;
