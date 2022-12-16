import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Secret = () => {
  const { user, setUser } = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const [thisUser, setThisUser] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById();
    getUserBooks();
  }, []);

  const getUserBooks = async () => {
    await axios
      .get("http://localhost:5000/borrowedBookList")
      .then((response) => {
        setBooks(response.data);
      });
  };

  const getUserById = async () => {
    await axios.get(`http://localhost:5000/users/${id}`).then((response) => {
      setThisUser(response.data);
    });
  };

  const goHome = () => {
    navigate(`/home/${id}`);
  };

  return (
    <div>
      <h1>This is a secret page</h1>
      <button onClick={goHome}>Home</button>
      <button
        onClick={() => {
          if (!user.loggedIn) return;
          setUser({ loggedIn: false });
        }}
      >
        Log Out
      </button>
      <h1>{thisUser.fullname}</h1>
      <h1>{thisUser.username}</h1>
      <h1>{thisUser.password}</h1>

      <div>
        {books
          .filter((book) => book.userId === id)
          .map((filteredBook) => (
            <>
              <img src={filteredBook.thumbnail} alt="Book Cover" />
              <h1>{filteredBook.title}</h1>
              <h1>{filteredBook.author}</h1>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await axios.delete(
                    `http://localhost:5000/deletebook/${filteredBook._id}`
                  );
                }}
              >
                <button type="submit">Cancel</button>
              </form>
            </>
          ))}
      </div>
    </div>
  );
};

export default Secret;
