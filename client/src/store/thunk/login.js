import axios from "axios";
import { setUser } from "../actions";
import { toast } from "react-toastify";

const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/login`, {
        email,
        password,
      });
      dispatch(setUser(response.data));

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.email);
      toast("Login successful");
    } catch (e) {
      if (e?.response?.data?.message) {
        toast(e?.response?.data?.message);
      } else {
        toast(`Server error`);
      }
    }
  };
};

export default login;
