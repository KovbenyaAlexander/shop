import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import registration from "../../store/thunk/registration";
import { useSelector, useDispatch } from "react-redux";

import "./style.scss";

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

  const loginHandler = () => {
    console.log(`login`);
  };

  const registrationHandler = () => {
    console.log(`reg`);
    dispatch(registration(email, password));
  };

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
