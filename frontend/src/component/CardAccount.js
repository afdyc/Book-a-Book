import React from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

const CardAccount = (props) => {
  const handleDelete = () => {
    props.onDelete(props.bookedBooks._id);
  };

  return (
    <>
      {/* {console.log(props.bookedBooks._id)} */}

      <div className="w-[200px] flex flex-col justify-center items-center text-center truncate mb-10">
        <img
          className="mx-auto h-[200px] mb-4 shadow-lg shadow-black"
          src={props.bookedBooks.thumbnail}
          alt="Book Cover"
        />

        <div className="flex flex-col items-center justify-center w-full h-[100px] bg-white rounded-lg">
          <h1 className="w-[150px] px-3 text-sm truncate text-center">
            {props.bookedBooks.title}
          </h1>
          <h1 className="w-[150px] px-3 text-sm truncate text-center">
            {props.bookedBooks.author}
          </h1>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              handleDelete();
              await axios.delete(
                `https://bookabookbackend.tech.afdyclinton.com/deletebook/${props.bookedBooks._id}`
              );
            }}
          >
            <button
              className="w-[150px] border-[#1d90f5] bg-[#1d90f5] rounded-lg mt-2 text-white hover:bg-[#44546E] hover:border-[#44546E] duration-300"
              type="submit"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CardAccount;
