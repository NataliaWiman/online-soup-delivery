import React, { useContext, useEffect, useState } from "react";
import firebase from "../../Firebase/firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../../Firebase/AuthProvider";
import { SignOut } from "../../Auth";
//import { Bonus } from "../../Bonus";

//export const currentUser = firebase.auth().currentUser;

export const AccountPage = () => {
  const authContext = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(Object)
  const currentUser = (authContext.user ? authContext.user.uid : "undefined");

  const db = firebase.firestore();
  const userRef = db.collection('Users').doc(currentUser);

  useEffect(() => {
    userRef.get().then(snapshot => setUserDetails(snapshot.data()));
  }, [currentUser]);

  return (
    <main className="account modal">
      <div className="account__wrapper modal__wrapper page-width">
        <div className="account__title-wrapper">
          <h2 className="account__title modal__title">{userDetails.username}</h2>
          <p className="account__email">{userDetails.email}</p>
          <p className="account__role">{userDetails.admin ? "Admin" : 'User'}</p>
          <div className="account__buttons">
            <SignOut />
        </div>
        </div>
      </div>
    </main>
  )}
;
