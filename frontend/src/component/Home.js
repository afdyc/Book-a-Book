import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Home = () => {
  const { id } = useParams();
  const [userSearch, setUserSearch] = useState("");
  const [googleBook, setGoogleBook] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookThumbnail, setBookThumbnail] = useState("");
  const navigate = useNavigate();

  //to go to user's page
  const goSecret = () => {
    navigate(`/secret/${id}`);
  };

  //this function is to search book from google API
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            userSearch +
            "&key=AIzaSyAkY83GcIe1otnDBpTu88LHQ2STLt8Pd-0" +
            "&maxResults=6"
        )
        .then((response) => {
          console.log(response.data.items);
          setGoogleBook(response.data.items);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //this function is to get the detail of which book a user trying to borrow
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(bookTitle.title);
    console.log(bookAuthor.author);
    console.log(bookThumbnail.thumbnail);
  };

  return (
    <>
      {/* search books */}
      <div>
        <h1 className="text-9xl">THIS IS HOME</h1>
        <button onClick={goSecret}>secret</button>

        <form onSubmit={handleClick}>
          <input
            onChange={(e) => {
              console.log(e.target.value);
              setUserSearch(e.target.value);
            }}
            type="text"
            placeholder="What book are you looking for ?"
            value={userSearch}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {/* get book info */}
      <div>
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
                <form onSubmit={handleSubmit}>
                  <img src={thumbnail} alt="Book Cover" />
                  <p>{title}</p>
                  <p>{author}</p>
                  <button
                    onClick={() => {
                      setBookTitle({ title });
                      setBookAuthor({ author });
                      setBookThumbnail({ thumbnail });
                    }}
                    type="submit"
                  >
                    book
                  </button>
                </form>
              </>
            );
          }
        })}
      </div>
    </>
  );
};

export default Home;
