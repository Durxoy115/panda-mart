/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import banner1 from "../../images/banner1_2.png";
// import banner2 from "../../images/banner-02.jpg";
// import banner3 from "../../images/banner-03.jpg";

const Carousel = () => {
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={banner1} class="w-100 rounded-lg lg:ml-44" />
        <div>
          <h1 class="text-5xl font-bold">Your Journey Start From Here!</h1>
          <p class="py-6 font-bold "></p>
          <a href="/products">
            <button class="btn btn-primary">Shop Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
