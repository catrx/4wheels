import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Auth from "../views/auth/auth";
import { Header } from "../components/header/header";
import Index from "../views/index";
import { ProductsList } from "../views/products_list/products_list";
import {Product} from "../views/product/product";
import {Shippings} from "../views/shippings/shippings";
import {useSelector} from "react-redux";

export const UserRoutes = () => {
  const user = useSelector(state => state.user_reducer.currentUser);
  console.log(user)
  if (!user) {
    return (
      <Switch>
        <Route component={Auth} />
      </Switch>
    );
  }
  return <LoggedRoutes />;
};

const LoggedRoutes = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/index" component={Index} />
        <Route path="/products-list" component={ProductsList} />
        <Route path="/product/:id" component={Product} />
        <Route path="/shippings" component={Shippings} />
        <Redirect from="*" to="/products-list" />
      </Switch>
    </>
  );
};
