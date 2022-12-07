import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/users`, {
        fullname,
        username,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full px-[40px]">
      <div>
        <form className="w-2/4 flex flex-col" onSubmit={registerUser}>
          <input
            className="border-black border-2"
            type="text"
            placeholder="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            className="border-black border-2"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border-black border-2"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-400 w-1/4">register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
