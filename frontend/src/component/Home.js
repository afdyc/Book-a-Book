import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-9xl">THIS IS HOME</h1>
      <Link to="/secret">secret</Link>
    </div>
  );
};

export default Home;
