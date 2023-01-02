import { useEffect } from "react";
import getUserByEmail from "../store/thunk/getUserByEmail";
import { useDispatch } from "react-redux";

function useAuthorization() {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || !email) {
      localStorage.clear();
    } else {
      dispatch(getUserByEmail(email, token));
    }
  }, [token, email, dispatch]);

  return null;
}

export default useAuthorization;
