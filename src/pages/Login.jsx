import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar/Navbar";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
    <Navbar/>
    <div >
      <p>Login</p>
      <input type="email" data-cy="login-email"  /><br />
      <input type="password" data-cy="login-password" /> <br />
      <button style={{width:"170px"}} type="submit" data-cy="login-submit">Login</button>
    </div>
    </>
  );
};

export default Login;


