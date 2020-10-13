import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { AccountPage } from "../pages/Account";
import { AdminPage } from "../pages/Admin";
import { HomePage } from "../pages/Home";
import { MenuPage } from "../pages/Menu";
import { RestorePasswordPage } from "../pages/RestorePassword";
import { SignInPage } from "../pages/SignIn";
import { SignUpPage } from "../pages/SignUp";
import * as ROUTES from '../../constants/routes';

export const App = () => 
  <Router>
    <div className="App">
      <Navigation />
      <hr />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_RESTORE} component={RestorePasswordPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.MENU} component={MenuPage} />
    </div>
  </Router>
;