import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Home = () => {
  const { id } = useParams();
  const [userSearch, setUserSearch] = useState("");
  const [googleBook, setGoogleBook] = useState([]);
  const navigate = useNavigate();

  const goSecret = () => {
    navigate(`/secret/${id}`);
  };

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

  return (
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

        {/* below is the latest update */}
        {googleBook.map((book) => {
          let thumbnail =
            book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.smallThumbnail;
          let author = book.volumeInfo.authors;
          let title = book.volumeInfo.title;

          if (thumbnail !== undefined && author !== undefined) {
            return (
              <>
                <li>{title}</li>
                <li>{author}</li>
              </>
            );
          }
        })}
      </form>
    </div>
  );
};

export default Home;
