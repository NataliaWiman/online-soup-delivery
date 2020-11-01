import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../Firebase/firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../Firebase/AuthProvider";

interface FormItems {
  username: string;
  email: string;
  password: string;
  admin: boolean;
};

const SignUp = () => {
  const authContext = useContext(AuthContext);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    admin: false,
    basket: []
  } as FormItems);

  const history = useHistory();

  const handleClick = () => {
    history.push("/signin")
  };

  const handleChange = (e: any) => {
    e.persist();
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: any) => {
    e?.preventDefault();

    console.log(values, 'values');

    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential : firebase.auth.UserCredential) => {
        authContext.setUser(userCredential);
        const db = firebase.firestore();
        db.collection("Users")
          .doc(userCredential.user!.uid)
          .set({
            email: values.email,
            username: values.username,
            admin: values.admin,
            basket: []
          })
          .then(() => {
            console.log('ok');
            history.push("/");
          })
          .catch(error => {
              console.log(error.message);
              alert(error.message);
          });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="sign-up__form">
      <input type="text" name="username" placeholder="Name" onChange={handleChange} />
      <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
      <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
      <label htmlFor="admin" className="sign-up__admin-checkbox">
        <input type="checkbox" name="admin" value="true" onChange={handleChange}/>
        <p>I'm an Admin</p>
      </label>
      <button type="submit" className="sign-up__button button">Sign Up</button>
      <div className="sign-up__sign-in">
        <p>
          <span>Already have an account?</span>
        </p>
        <button onClick={handleClick} className="ghost-button">Sign In</button>
      </div>
    </form>
  );
};

export default SignUp;