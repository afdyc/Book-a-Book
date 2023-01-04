import React, { useState } from "react";
import { motion } from "framer-motion";
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
          navigate(`/home/${response.data}`);
        });
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status !== 200) {
        alert("Username or password is incorrect!");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className="w-full h-screen flex flex-col items-center md:grid grid-cols-2 md:pr-0"
    >
      <form
        className="w-full h-full flex flex-col justify-center md:px-[150px] bg-gradient-to-r from-white to-pink-100"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col -mt-10 px-[40px]">
          <div className="overflow-hidden">
            <motion.h1
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "100%", opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-4xl font-bold mb-2 md:text-[52px] md:leading-[50px]"
            >
              Account Log In<span className="text-[#1d90f5]">.</span>
            </motion.h1>
            <motion.p
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: "100%", opacity: 0 }}
              transition={{ delay: 0.75, duration: 0.75 }}
              className="mb-4"
            >
              Please enter your details below.
            </motion.p>
          </div>

          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative"
          >
            <input
              className="absolute bg-[#DADCE0] w-full h-[60px] rounded-lg px-3 pt-4"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                // console.log(e.target.value);
              }}
            />
            <label
              className="absolute px-3 mt-1 opacity-50 text-sm"
              htmlFor="username"
            >
              Username
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
              onChange={(e) => {
                setPassword(e.target.value);
                // console.log(e.target.value);
              }}
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
            transition={{ delay: 0.75, duration: 0.75 }}
            className="mt-20"
          >
            <a href="/register">
              Don't have an account?{" "}
              <span className="text-[#1d90f5] font-semibold hover:text-cyan-300 duration-300">
                Register
              </span>
            </a>
          </motion.div>

          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-5 flex justify-center text-white"
          >
            <button
              className="w-1/2 h-[60px] border-[#1d90f5] bg-[#1d90f5] py-2 px-2 rounded-full shadow-black shadow-2xl hover:bg-[#44546E] hover:border-[#44546E] duration-300"
              type="submit"
            >
              login
            </button>
          </motion.div>
        </div>
      </form>
      <div className="w-full h-screen hidden md:flex flex-col justify-center items-start bg-gradient-to-r from-pink-100 to-cyan-100 px-[60px] pb-[175px]">
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.75, duration: 0.75 }}
          className="text-[40px] leading-[100px] font-bold"
        >
          How To Use This Website :
        </motion.h1>
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.75, duration: 0.75 }}
          className="text-[20px] font-bold"
        >
          <span className="text-[#1d90f5]">1. </span>
          If you dont have an account please register first
        </motion.h1>
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.75, duration: 0.75 }}
          className="text-[20px] font-bold"
        >
          <span className="text-[#1d90f5]">2. </span>
          Log in using your account through Log In page
        </motion.h1>
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.75, duration: 0.75 }}
          className="text-[20px] font-bold"
        >
          <span className="text-[#1d90f5]">3. </span>
          Now you can search a book that you want to borrow
        </motion.h1>
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.75, duration: 0.75 }}
          className="text-[20px] font-bold"
        >
          <span className="text-[#1d90f5]">4. </span>
          Click "book" button to book the book
        </motion.h1>
        <motion.h1
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.75, duration: 0.75 }}
          className="text-[20px] font-bold"
        >
          <span className="text-[#1d90f5]">5. </span>
          Check all the books you have booked in your "Account" page
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Login;
