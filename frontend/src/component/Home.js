import axios from "axios";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const { id } = useParams();
  const [userSearch, setUserSearch] = useState("");
  const [googleBook, setGoogleBook] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookThumbnail, setBookThumbnail] = useState("");

  //this function is to search book from google API
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            userSearch +
            "&key=AIzaSyAkY83GcIe1otnDBpTu88LHQ2STLt8Pd-0" +
            "&maxResults=4"
        )
        .then((response) => {
          //console.log(response.data.items);
          setGoogleBook(response.data.items);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //this function is to get the detail of which book a user trying to borrow
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = id;
    const title = bookTitle.title;
    const author = bookAuthor.author;
    const thumbnail = bookThumbnail.thumbnail;

    try {
      await axios.post(`http://localhost:5000/booksborrowed`, {
        userId,
        title,
        author,
        thumbnail,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="w-full h-screen bg-gradient-to-r from-pink-100 to-cyan-100 md:flex flex-col justify-center items-center"
      >
        <div className="flex flex-col w-[400px] h-screen md:w-[1500px] mx-auto items-center justify-center">
          <div className="w-full h-1/2 flex flex-col items-center justify-center pt-[200px]">
            <div className="inline">
              <h1 className="text-4xl text-center font-bold md:text-6xl py-2 mb-5 md:mt-0 border-b-2 border-[#1d90f5] md:text-left">
                Book a book now !!!
              </h1>
              {/* <h1 className="text-center text-xl font-bold py-10 md:text-2xl">
              Search a book you want to borrow
            </h1> */}
            </div>

            {/* search books */}
            <form
              onSubmit={handleClick}
              className="w-full h-[125px] text-center flex flex-col justify-center items-center md:w-2/3"
            >
              <input
                onChange={(e) => {
                  //console.log(e.target.value);
                  setUserSearch(e.target.value);
                }}
                className="w-2/3 h-2/3 border-solid bg-[#DADCE0] px-3 rounded-lg p-2 mx-1 my-6"
                type="text"
                placeholder="Type the title of the book here"
                value={userSearch}
              />
              <button
                className="w-[200px] h-[70px] border-solid border-2 rounded-full py-2 px-2 border-[#1d90f5] bg-[#1d90f5] text-white text-sm p-[6px] mx-1 shadow-md shadow-gray-400 hover:bg-[#44546E] hover:border-[#44546E] duration-300"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          {/* get book info */}
          <div className="w-full h-1/2 grid grid-cols-1 place-items-center md:grid-cols-4">
            {googleBook.map((book) => {
              //let bookId = book.id;
              let author = book.volumeInfo.authors;
              let title = book.volumeInfo.title;
              let thumbnail =
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.smallThumbnail;

              if (thumbnail !== undefined && author !== undefined) {
                return (
                  <>
                    <div>
                      <form
                        className="w-[200px] my-5  rounded-lg"
                        onSubmit={handleSubmit}
                      >
                        <div className="flex items-center justify-center">
                          <img
                            className="mx-auto h-[200px] mb-6 shadow-lg shadow-black"
                            src={thumbnail}
                            alt="Book Cover"
                          />
                        </div>

                        <div className="flex flex-col items-center justify-center h-[100px] bg-white rounded-lg">
                          <p className="w-[150px] px-3 text-sm truncate text-center">
                            {title}
                          </p>
                          <p className="w-[150px] px-3 text-sm truncate text-center">
                            {author}
                          </p>
                          <button
                            className="w-[150px] border-[#1d90f5] bg-[#1d90f5] rounded-lg mt-2 text-white hover:bg-[#44546E] hover:border-[#44546E] duration-300"
                            onClick={() => {
                              setBookTitle({ title });
                              setBookAuthor({ author });
                              setBookThumbnail({ thumbnail });
                            }}
                            type="submit"
                          >
                            book
                          </button>
                        </div>
                      </form>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
