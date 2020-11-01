import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AccountPage } from "../pages/Account";
import { AdminPage } from "../pages/Admin";
import { HomePage } from "../pages/Home";
import { MenuPage, MenuDrinksPage, MenuExtraPage } from "../pages/Menu";
import { BasketAddressPage, BasketFinishPage, BasketPage } from "../pages/Basket";
import { RestorePasswordPage } from "../pages/RestorePassword";
import { SignInPage } from "../pages/SignIn";
import { SignUpPage } from "../pages/SignUp";
import * as ROUTES from '../../constants/routes';
import { PrivateRoute } from "../PrivateRoutes";
import { Header } from "../Header";

export const App = () =>
  <Router>
    <div className="App">
      <Header />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_RESTORE} component={RestorePasswordPage} />
      <PrivateRoute exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <PrivateRoute exact path={ROUTES.ADMIN} component={AdminPage} />
      <Route exact path={ROUTES.BASKET} component={BasketPage} />
      <Route exact path={ROUTES.BASKET_ADDRESS} component={BasketAddressPage} />
      <Route exact path={ROUTES.BASKET_FINISH} component={BasketFinishPage} />
      <Route path={ROUTES.MENU} component={MenuPage} />
      <Route path={ROUTES.MENU_DRINKS} component={MenuDrinksPage} />
      <Route path={ROUTES.MENU_EXTRA} component={MenuExtraPage} />
    </div>
  </Router>
;