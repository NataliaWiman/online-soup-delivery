import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../Firebase/firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../Firebase/AuthProvider";

interface FormItems {
  username: string;
  phone: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const authContext = useContext(AuthContext);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""
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
        db.collection("NewUsers")
          .doc(userCredential.user!.uid)
          .set({
            email: values.email,
            username: values.username,
            phone: values.phone
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
    <div>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
       <input type="text" name="username" placeholder="Username" onChange={handleChange} /><br />
       <input type="text" name="phone" placeholder="Phone" onChange={handleChange}/><br />
       <input type="text" name="email" placeholder="Enter your Email" onChange={handleChange}/><br />
       <input type="password" name="password" placeholder="Enter your Password" onChange={handleChange}/><br />
       <button type="submit">Sign Up</button>
       <p>Already have an account?</p>
       <button onClick={handleClick}>Sign In</button>
     </form>
    </div>
  );
};

export default SignUp;