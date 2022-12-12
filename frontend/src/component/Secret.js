import React, { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const Secret = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>This is a secret page</h1>
      <Link to="/home">Home</Link>
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
