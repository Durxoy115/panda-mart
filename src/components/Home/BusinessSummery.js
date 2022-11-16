import React from "react";
import image from '../../images/summery.jpg'
const BusinessSummery = () => {
  return (
    <div className="lg:m-10 shadow-lg rounded-lg">
      <div className="hero min-h-screen bg-base-200 lg:p-6">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src={image}
            alt=''
            className="max-w-xs lg:max-w-md rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="lg:text-5xl text-3xl font-bold mb-2 text-stone-500">Business Summery</h1>
            <h1 className="lg:text-5xl text-3xl font-bold text-yellow-500">Cordless Tools Manufacturer</h1>
            <p className="py-6 text-justify">
              We have been specialized in the design and manufacture of cordless
              tools for more than 10 years. All of our products can be used in
              one 20V Max Li-ion battery. Most of products have got certificates
              such as UL/ETL/GS/CE, and mainly exported to North American and
              European markets. With professional R&D engineers, skillful
              workers, strict quality control system, and high efficiency
              management, we can ensure that each product is well made with
              correct specification and competitive price.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummery;
