import axios from "axios";
import { setUser, setLoading } from "../actions";
import { toast } from "react-toastify";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { IStore } from "../../types/store-types";

const login = (email: string, password: string, handleClose: () => void) => {
  return async (dispatch: ThunkDispatch<void, IStore, AnyAction>) => {
    try {

      dispatch(setLoading(true));
      const response = await axios.post(
        `${process.env.REACT_APP_SERVR_URL}/login`,
        {
          email,
          password,
        }
      );
      dispatch(setUser(response.data));

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.email);
      toast("Login successful");
    } catch (e: any) {
      if (e?.response?.data?.message) {
        toast(e?.response?.data?.message);
      } else {
        toast(`Server error`);
      }
    } finally {
      handleClose();
      dispatch(setLoading(false));
    }
  };
};

export default login;
