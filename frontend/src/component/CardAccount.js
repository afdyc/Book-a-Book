import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CardAccount = (props) => {
  const handleDelete = () => {
    props.onDelete(props.bookedBooks._id);
  };

  return (
    <>
      {/* {console.log(props.bookedBooks._id)} */}
      <img src={props.bookedBooks.thumbnail} alt="Book Cover" />
      <h1>{props.bookedBooks.title}</h1>
      <h1>{props.bookedBooks.author}</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          handleDelete();
          await axios.delete(
            `http://localhost:5000/deletebook/${props.bookedBooks._id}`
          );
        }}
      >
        <button type="submit">Cancel</button>
      </form>
    </>
  );
};

export default CardAccount;
