import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
//import { User, auth } from "firebase";
import firebase from "../Firebase/firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../Firebase/AuthProvider";

interface UserData {
  email: string;
  password: string;
}

const SignIn = () => {
  const authContext = useContext(AuthContext);

  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: ""
  } as UserData);

  const handleClick = () => {
    history.push("/signup");
  }
  const handleChange = (e: any) => {
    e.persist();
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
  }));
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(res => {
        authContext.setUser(res);
        console.log(res, 'res');
        history.push("/");
        })
      .catch(error => {
        console.log(error.message);
        alert(error.message);
        });
 }

  return (
    <form onSubmit={handleSubmit} className="sign-in__form">
      <input type="text" name="email" value={values.email} placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" value={values.password} placeholder="Password" onChange={handleChange} />
      <button className="sign-in__button button">Sign In</button>
      <div className="sign-in__sign-up">
        <p>
          <span>Don't have an account?</span>
        </p>
        <button onClick={handleClick} className="ghost-button">Sign Up</button>
      </div>
    </form>
  );
};

export default SignIn;