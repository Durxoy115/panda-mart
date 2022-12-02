import React from "react";
import img from "../../images/about.png";

const About = () => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
        <p className="p-10 text-justify">
          Looking for the fastest way to get your electronic products? panda
          Mart is our online shop that features your favourite brands. Pick from
          mobile phone , camera and other electronic products are deliver in
          just 2 days. <br />
          <br />
          Panda Mart has a group of experienced engineers and technicians. We
          collect market information and carry out R&D job accordingly. If you
          need special tools or equipment that Panda Mart does not include, you
          could tell us for ODM service.
          <br />
          <br />
          Panda Mart supplies a full range of power tools, hand tools, equipment
          and accessories at home and abroad. All products are produced under
          strict and comprehensive quality control system. We undertake a series
          of inspections before, during and after production, making sure that
          customers always get the best from Panda Mart. All our products are
          qualified with relevant certificates. If you need any specific
          certification, please inform us when placing an order.
          <br />
          <br />
          Our products have successfully passed the ISO 9001, ISO 45001, CE,
          ROHS, ISO14001, auditing, which make more efforts in enhancing the
          quality ideology and working capabilities of all the staff.
          <br />
          <br />
          We have advanced high-quality product to satisfied our client
        </p>
      </div>
    </div>
  );
};

export default About;
