import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
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
  const handleClose = () => setIsModalOpen(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    console.log(`login`);
  };

  const registrationHandler = () => {
    console.log(`reg`);
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
          onChange={(e) => setLogin(e.target.value)}
          value={login}
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
