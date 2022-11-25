import React from "react";
import { useState } from "react";
import useProduct from "../../hooks/useProduct";
import Products from "../Home/Products";
import search from "../../images/search.png";

const AllProducts = () => {
  const [products, setProducts] = useProduct();
  const searchResult = [];
  const handleSearch = () => {
    const searchText = document.getElementById("searchText").value;
    // const url = `https://floating-gorge-66618.herokuapp.com/book?name=${searchText}`;
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setSearchResult(data));
    products.map((p) => {
      const lowName = p.name.toLowerCase();
      if (searchText.toLowerCase().includes(lowName)) {
        searchResult.push(p);
      }
    });
    console.log(searchResult);
    setProducts([]);
  };
  return (
    <div>
      <div className="flex justify-center w-full items-center my-5">
        <div className="w-1/2 lg:w-1/3 flex">
          <input
            className="input w-full input-sm input-success font-serif"
            name="searchText"
            id="searchText"
            type="text"
            placeholder="Enter Product Name"
          />
          {/* <button
            onClick={handleSearch}
            className="btn btn-ghost btn-xs hover:bg-transparent rounded-full"
          >
            <img className="w-16 rounded-full" src={search} alt="" />
          </button> */}
        </div>
      </div>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <select
            class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option className="font-serif font-bold">Select Category</option>
            {products.map((p) => (
              <option className="font-serif font-bold" value={p.category}>
                {p.category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <h1 className="text-center text-3xl font-extrabold font-serif mt-4">
        All Products
      </h1>
      <div className="flex justify-center">
        <div className="divider w-1/3 mt-0"></div>
      </div>
      <div className=" mt-2  card grid gap-4 md:grid-cols-2 lg:grid-cols-4 bg-base-100 p-3 lg:p-10">
        {products.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
