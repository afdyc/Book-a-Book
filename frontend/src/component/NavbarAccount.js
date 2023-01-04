import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const NavbarAccount = () => {
  const { id } = useParams();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home/${id}`);
  };
  return (
    <div className="w-full h-[80px] fixed flex justify-end items-center md:pr-28 z-10">
      <button
        className="text-base font-normal mx-4 hover:border-b-2 border-[#1d90f5] md:text-lg"
        onClick={handleClick}
      >
        Home
      </button>

      <button
        className="text-base font-normal mx-4 hover:border-b-2 border-[#1d90f5] md:text-lg"
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

export default NavbarAccount;
