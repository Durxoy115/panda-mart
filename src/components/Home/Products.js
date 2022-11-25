import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Products = ({ product }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const { _id, name, img, description, category, price, quantity, min_order } =
    product;
  const navigate = useNavigate();

  const handleBuyNow = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div className="shadow-lg rounded-xl ">
      <figure>
        <img
          className="h-44 rounded-t-xl hover:scale-110 transition-transform"
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body text-justify">
        <h2 className="card-title">{name}</h2>
        {/* <p>{description}</p> */}
        <p className="font-semibold">Price: Tk.{price}</p>
        <input type="search" />
        <p className="font-semibold">Available Quantity: {quantity} Pcs</p>
        <p className="font-semibold normal-case">Category: {category}</p>
        <div className="card-actions justify-end">
          {!admin && (
            <button
              onClick={() => handleBuyNow(_id)}
              className="btn btn-primary btn-sm"
            >
              Buy Now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
