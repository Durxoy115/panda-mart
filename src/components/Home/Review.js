import React from "react";

const Review = ({ review }) => {
  const { name, email, message } = review;

  return (
    <div>
      <div className="card w-92 bg-base-100 shadow-xl">
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <p className="text-justify">{message}</p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Review;
