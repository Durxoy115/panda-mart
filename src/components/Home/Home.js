import React from "react";
import { Link } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import useReviews from "../../hooks/useReviews";
import BusinessSummery from "./BusinessSummery";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Products from "./Products";
import Review from "./Review";

const Home = () => {
  const [products] = useProduct();
  const [review] = useReviews();
  return (
    <div>
      <Carousel></Carousel>

      <section className="mt-14">
        <h1 className="text-center text-5xl font-extrabold font-serif">
          Our Products
        </h1>
        <div className="flex justify-center">
          <div className="divider w-1/3 mt-0"></div>
        </div>
        <div className=" mt-6 card grid gap-14  md:grid-cols-2 lg:grid-cols-3 bg-base-100 p-3 lg:p-10">
          {products.map((product) => (
            <Products key={product._id} product={product}></Products>
          )).reverse().slice(0,6)}
        </div>
        <div className="text-center">
          <Link to='/products' className="btn btn-accent font-semibold text-white">
            Show All Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        </div>
      </section>

      <BusinessSummery></BusinessSummery>

      
      <section className=" bg-gray-300 shadow-lg rounded-lg lg:m-10 lg:p-5 mb-10 mt-10">
        <h1 className="text-center text-3xl font-bold mb-3" >
          Customer Reviews
        </h1>
        <div className=" grid gap-10  md:grid-cols-2 lg:grid-cols-3 lg:m-10">
          {review
            .map((review) => <Review key={review._id} review={review}></Review>)
            .reverse()
            .slice(0, 3)}
        </div>
      </section>

      <Contact></Contact>
    </div>
  );
};

export default Home;
