import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleBurger, closeBurger, logout } from "../../store/actions";
import RegistrationModal from "../RegistrationModal/RegistrationModal";
import { IStore } from "../../types";

import "./style.scss";

const Header = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const orderSize = useSelector((state: IStore) => state.orderSize);
  const history = useHistory();
  const isBurgerOpen = useSelector((state: IStore) => state.isBurgerOpen);
  const dispatch = useDispatch();
  const userEmail = useSelector((state: IStore) => state.user.email);
  const accessToken = useSelector((state: IStore) => state.user.accessToken);

  const onCartClickHandler = () => {
    history.push("/cart");
    dispatch(closeBurger());
  };

  const onClickLogoHandler = () => {
    history.push("/");
    dispatch(closeBurger());
  };

  const onClickBurgerHandler = () => {
    dispatch(toggleBurger());
  };

  const loginModalHandler = () => {
    console.log(`modal`);
    setIsModalOpen(true);
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__logo-container">
          <button
            type="button"
            className={
              isBurgerOpen
                ? "header__burger header__burger-active"
                : "header__burger"
            }
            onClick={onClickBurgerHandler}
          >
            <span />
          </button>

          <button
            type="button"
            onClick={onClickLogoHandler}
            className="header__logo"
          >
            LOGOS
          </button>
        </div>

        <div className="header__contacts">
          {/* <FontAwesomeIcon icon={faPhone} className="header__icon" />
          <div className="header__phone">
            <p className="header__phone-description">Наш телефон</p>
            <p className="header__phone-number"> +7 (999) 999-99-99</p>
          </div> */}
          {accessToken ? (
            <>
              <span>{userEmail}</span>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </>
          ) : (
            <button onClick={loginModalHandler}>LOGIN</button>
          )}
        </div>

        <button type="button" className="cart-btn" onClick={onCartClickHandler}>
          <span className="cart-btn-text">Корзина</span>

          {orderSize > 0 ? (
            <>
              {orderSize < 100 ? (
                <span className="cart-btn__counter">{orderSize}</span>
              ) : (
                <span className="cart-btn__counter cart-btn__counter-small">
                  99+
                </span>
              )}
            </>
          ) : null}
        </button>
      </div>
      <RegistrationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </header>
  );
};

export default Header;
