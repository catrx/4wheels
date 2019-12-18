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

export const UserRoutes = () => {
  const user = true; // en attendant l'authentification
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
        <Route path="/auth" component={Auth} />
        <Route path="/index" component={Index} />
        <Route path="/products-list" component={ProductsList} />
        <Route path="/product/:id" component={Product} />
        <Redirect from="*" to="/index" />
      </Switch>
    </>
  );
};
