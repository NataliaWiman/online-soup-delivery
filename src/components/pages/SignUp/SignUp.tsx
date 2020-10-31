import React from "react";
import SignUp from "../../Auth/SignUp";

export const SignUpPage = () => 
  <main className="sign-up">
    <div className="sign-up__wrapper page-width modal__wrapper">
      <h2 className="sign-up__title">Create an account</h2>
      <SignUp />
    </div>
  </main>
;
