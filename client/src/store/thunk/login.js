import axios from "axios";
import { setUser } from "../actions";

const login = (email, password) => {
  return async (dispatch, getState) => {
    console.log(`THUNK`);
    const response = await axios.post(`http://localhost:5000/api/login`, {
      email,
      password,
    });
    dispatch(setUser(response.data));

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("email", response.data.email);
  };
};

export default login;
