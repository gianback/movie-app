import axios from "axios";
import React, { useState } from "react";

export const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const { email, password } = login;
  const handleInputChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const { data } = await axios.post("http://localhost:300/api/login", {
      login,
    });
    console.log(data);
  };

  return (
    <div className="Login">
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
      />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
};
