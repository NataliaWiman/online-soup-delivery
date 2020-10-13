import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { User, auth } from "firebase";
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
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" value={values.email} placeholder="Enter your Email" onChange={handleChange} /><br />
        <input type="password" name="password" value={values.password} placeholder="Enter your Password" onChange={handleChange} /><br />
        <button>Sign In</button>
        <p>Don't have an account?</p>
        <button onClick={handleClick}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignIn;