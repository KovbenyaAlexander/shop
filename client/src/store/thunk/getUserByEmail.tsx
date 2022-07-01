import axios from "axios";
import { setUser } from "../actions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { IStore } from "../../types/store-types";

const getUserByEmail = (email: string, token: string) => {
  return async (dispatch: ThunkDispatch<void, IStore, AnyAction>) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVR_URL}/getUser`,
        {
          email,
          token,
        }
      );
      dispatch(setUser(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export default getUserByEmail;
