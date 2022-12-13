import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Secret = () => {
  const { user, setUser } = useContext(UserContext);
  const [thisUser, setThisUser] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    await axios.get(`http://localhost:5000/users/${id}`).then((response) => {
      console.log(response.data);
      setThisUser(response.data);
    });
  };

  const goHome = () => {
    navigate(`/home/${id}`);
  };

  return (
    <div>
      <h1>This is a secret page</h1>
      <h1>{thisUser.fullname}</h1>
      <h1>{thisUser.username}</h1>
      <h1>{thisUser.password}</h1>
      <h1>{thisUser.book}</h1>
      <button onClick={goHome}>Home</button>
      <button
        onClick={() => {
          if (!user.loggedIn) return;
          setUser({ loggedIn: false });
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Secret;
