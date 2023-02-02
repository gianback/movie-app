import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    if (Object.keys(user).every((item) => user[item] === "")) {
      for (const key in errors) {
        setErrors((prevState) => {
          return {
            ...prevState,
            [key]: "This field is required",
          };
        });
      }
      setTimeout(() => {
        for (const key in errors) {
          setErrors((prevState) => {
            return {
              ...prevState,
              [key]: "",
            };
          });
        }
      }, 5000);
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:3000/auth/login", {
        user,
      });
      const { message, token } = data;
      if (message === "Ok") {
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
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
      {errors.email && <p>{errors.email}</p>}
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
};
