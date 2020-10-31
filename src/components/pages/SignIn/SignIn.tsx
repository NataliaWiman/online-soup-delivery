import React from "react";
import SignIn from "../../Auth/SignIn";

export const SignInPage = () => 
  <main className="sign-in">
    <div className="sign-in__wrapper page-width modal__wrapper">
      <h2 className="sign-in__title">Welcome back</h2>
      <SignIn />
    </div>
  </main>
;