import React from "react";
import "./style.scss";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Cart from "./Pages/Cart/Cart";
import Main from "./Pages/Main/Main";
import FoodDescription from "./Pages/FoodDescription/FoodDescription";
import Order from "./Pages/Order/Order";
import useAuthorization from "./customHooks/useAuthorization";
import { ToastContainer, toast } from "react-toastify";

const App = (): JSX.Element => {
  useAuthorization();

  return (
    <div className="app">
      <Header />

      <Route path="/" exact>
        <Main />
      </Route>

      <Route path="/cart" exact>
        <Cart />
      </Route>

      <Route path="/order" exact>
        <Order />
      </Route>

      <Route
        path="/food/:id"
        render={({ match }) => {
          const currentID = match.params.id;
          return (
            <>
              <FoodDescription id={currentID} />
            </>
          );
        }}
      />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: "rgb(212, 211, 212)" }}
      />
      <div className="bottom-shadow" />
    </div>
  );
};

export default App;
