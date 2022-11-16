import React from "react";
import img from "../../images/about.png";

const About = () => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
        <p className="p-10 text-justify">
          TOOLSITE, originated from Bangladesh, dedicates itself to develop and
          manufacture high quality power tools and equipment with affordable
          price.We own 2 factories and 3 warehouses, and cooperate with several
          alliance ones. Our thorough management system,including manufacture,
          product R&D, uniform packaging, and quality assurance processes,
          enables us to successfully set up the world's largest retail chains.{" "}
          <br />
          <br />
          TOOLSITE has a group of experienced engineers and technicians. We
          collect market information and carry out R&D job accordingly. If you
          need special tools or equipment that TOOLSITE does not include, you
          could tell us for ODM service.
          <br />
          <br />
          TOOLSITE supplies a full range of power tools, hand tools, equipment
          and accessories at home and abroad. All products are produced under
          strict and comprehensive quality control system. We undertake a series
          of inspections before, during and after production, making sure that
          customers always get the best from TOOLSITE. All our products are
          qualified with relevant certificates. If you need any specific
          certification, please inform us when placing an order.
          <br />
          <br />
          Our products have successfully passed the ISO 9001, ISO 45001, CE,
          ROHS, ISO14001, auditing, which make more efforts in enhancing the
          quality ideology and working capabilities of all the staff.
          <br />
          <br />
          We have advanced high-quality manufacturing equipments imported
          ensuring to achieve 100% excellent quality and high customer
          satisfaction.
        </p>
      </div>
    </div>
  );
};

export default About;
