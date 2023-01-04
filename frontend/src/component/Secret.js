import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavbarAccount from "./NavbarAccount";
import CardAccount from "./CardAccount";

const Secret = () => {
  const [books, setBooks] = useState([]);
  const [thisUser, setThisUser] = useState("");
  const { id } = useParams();

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

  const deleteBook = (id) => {
    console.log(id);
    setBooks((prevBooks) => {
      return prevBooks.filter((filteredBook) => {
        return filteredBook._id !== id;
      });
    });
  };

  return (
    <>
      <NavbarAccount />
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className="w-3/4 h-screen flex flex-col items-start pt-32">
          <div className="h-[50px] flex items-start mb-4">
            <h1 className="text-4xl text-center font-bold">
              Hi {thisUser.fullname}
              <span className="text-[#1d90f5]">,</span>
            </h1>
          </div>

          <div className="h-screen flex flex-col items-start">
            <h1 className="text-xl font-bold mb-6">
              You have booked these books :
            </h1>
            {books
              .filter((book) => book.userId === id)
              .map((filteredBook) => {
                return (
                  <CardAccount
                    key={filteredBook.id}
                    id={filteredBook.id}
                    bookedBooks={filteredBook}
                    onDelete={deleteBook}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Secret;
