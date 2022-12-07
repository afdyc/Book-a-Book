import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", { username, password });
      navigate("/");
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status !== 200) {
        alert("Username or password is incorrect!");
      }
    }
  };

  return (
    <div className="w-full h-full px-[40px]">
      <div className="w-1/4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
        >
          <input
            className="border-black border-2"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              console.log(e.target.value);
            }}
          />
          <input
            className="border-black border-2"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(e.target.value);
            }}
          />

          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
