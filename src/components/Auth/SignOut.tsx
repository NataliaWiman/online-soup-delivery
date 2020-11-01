import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "../Firebase/firebase";
import "firebase/firestore";

export const SignOut = () => {
   const history = useHistory();

   const handleClick = (event: any) => {
    event.preventDefault();

    firebase
      .auth()
      .signOut()
      .then(res => {
        history.push("/signin");
      })
    }

  return (
    <div>
      <button className="button ghost-button" onClick={handleClick}>Sign Out</button>
    </div>
   );
};