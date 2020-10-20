import React from "react";

export const AccountPage = () => 
  <main className="account modal">
  <div className="account__wrapper modal__wrapper page-width">
    <div className="account__title-wrapper">
      <h2 className="account__title modal__title">Name</h2>
      <p className="account__email">email@email.com</p>
    </div>
    <div className="account__bonus bonus">
      Your bonus
    </div>
    <div className="account__send-soup send-soup">
      Send soup to a friend
    </div>
    <div className="account__buttons">
      Previeous orders, Log out
    </div>
  </div>
  </main>
;
