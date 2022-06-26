import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import registration from "../../store/thunk/registration";
import login from "../../store/thunk/login";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";
import { IStore } from "../../types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({ setIsModalOpen, isModalOpen }: any): JSX.Element => {
  const dispatch = useDispatch();
  const handleClose = () => setIsModalOpen(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const accesToken = useSelector((state: IStore) => state.user.accessToken);

  const loginHandler = () => {
    console.log(`login`);
    dispatch(login(email, password));
    handleClose();
  };

  const registrationHandler = () => {
    console.log(`reg`);
    dispatch(registration(email, password));
  };

  useEffect(() => {
    if (accesToken) {
      handleClose();
    }
  });

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Login"
        ></input>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        ></input>
        <button onClick={loginHandler}>Login</button>
        <button onClick={registrationHandler}>Registration</button>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
