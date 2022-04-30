import React from "react";
import "./style.scss";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./Pages/Cart/Cart";
import Main from "./Pages/Main/Main";
import FoodDescription from "./Pages/FoodDescription/FoodDescription";
import Order from "./Pages/Order/Order";

const App = (): JSX.Element => (
  <div className="app">
    <Header />

    <Route path="/" exact>
      <Main />
    </Route>

    <Route path="/cart" exact>
      <Cart />
      <Footer />
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

    <div className="bottom-shadow" />
  </div>
);

export default App;
