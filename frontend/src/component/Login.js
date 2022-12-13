import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const authSuccess = () => {
    console.log("you've logged in");
    if (user.loggedIn) return;
    setUser({ loggedIn: true });

    if (location.state?.from) {
      navigate(location.state.from);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/login", { username, password })
        .then((response) => {
          authSuccess();
          console.log(response.data);
          navigate(`/secret/${response.data}`);
        });
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
              // console.log(e.target.value);
            }}
          />
          <input
            className="border-black border-2"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
