import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../utilities/FirebaseInstance.js";
export default function AuthComp() {
  const [userDetails, updateUserDetails] = useState({
    email: "",
    password: "",
  });
  const passwordAuth = (userdetails) => {
    console.log("tnis is the passwordauth ", userdetails);
    const auth = getAuth(app);
    createUserWithEmailAndPassword(
      auth,
      userdetails.email,
      userdetails.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("User is ", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("this is the erro r", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>AuthComp</h2>
      <input
        type="email"
        name="email"
        value={userDetails.email}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="password"
        name="password"
        value={userDetails.password}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={passwordAuth}>Login With Password</button>
    </div>
  );
}
