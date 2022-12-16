import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const book = "";
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`http://localhost:5000/users`, {
          fullname,
          username,
          password,
          book,
        })
        .then(() => navigate("/"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="w-full h-screen flex flex-col items-center md:grid grid-cols-2 md:pr-0"
    >
      <form
        className="w-full h-full flex flex-col justify-center md:px-[150px] bg-gradient-to-r from-white to-pink-100 px-[40px]"
        onSubmit={registerUser}
      >
        <div className="w-full flex flex-col -mt-10">
          <motion.h1
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-4xl font-bold mb-2 md:text-[52px] md:leading-[50px]"
          >
            Create New Account<span className="text-[#1d90f5]">.</span>
          </motion.h1>
          <motion.p
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-4"
          >
            Already A Member?{" "}
            <a
              className="text-[#1d90f5] font-semibold hover:text-cyan-300 duration-300"
              href="/"
            >
              Log In
            </a>
          </motion.p>

          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative"
          >
            <input
              className="absolute bg-[#DADCE0] w-1/2 h-[60px] rounded-lg px-3 pt-4"
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <label
              className="absolute px-3 mt-1 opacity-50 text-sm"
              htmlFor="name"
            >
              Full Name
            </label>
          </motion.div>

          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative mt-20"
          >
            <input
              className="absolute bg-[#DADCE0] w-full h-[60px] rounded-lg px-3 pt-4"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label
              className="absolute px-3 mt-1 opacity-50 text-sm"
              htmlFor="username"
            >
              username
            </label>
          </motion.div>

          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative mt-20"
          >
            <input
              className="absolute bg-[#DADCE0] w-full h-[60px] rounded-lg px-3 pt-4"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              className="absolute px-3 mt-1 opacity-50 text-sm"
              htmlFor="password"
            >
              Password
            </label>
          </motion.div>

          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-20 flex justify-center text-white"
          >
            <button
              className="w-1/2 h-[60px] border-[#1d90f5] bg-[#1d90f5] py-2 px-2 rounded-full shadow-black shadow-2xl hover:bg-[#44546E] hover:border-[#44546E] duration-300"
              type="submit"
            >
              Register
            </button>
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
};

export default Register;
