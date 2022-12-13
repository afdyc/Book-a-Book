import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Home = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goSecret = () => {
    navigate(`/secret/${id}`);
  };

  return (
    <div>
      <h1 className="text-9xl">THIS IS HOME</h1>
      <button onClick={goSecret}>secret</button>
    </div>
  );
};

export default Home;
