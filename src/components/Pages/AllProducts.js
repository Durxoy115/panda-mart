import React from "react";
import { useState } from "react";
import useProduct from "../../hooks/useProduct";
import Products from "../Home/Products";
import search from "../../images/search.png";
import { useEffect } from "react";

const AllProducts = () => {
  const [products, setProducts] = useProduct();
  const [categorys, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [item, setItem] = useState([]);

  const searchFilter = products?.filter((product) =>
    product.name.toLowerCase().includes(search)
  );

  const categorySearch = products?.filter(
    (product) => product.category === categorys
  );

  const reset = () => {
    setCategory("");
    setSearch("");
    document.getElementById("searchText").value = "";
    document.getElementById("select").value = "Select Category";
  };
  // useEffect(() => {
  //   if (categorySearch) {
  //     setItem(categorySearch);
  //   } else {
  //     setItem(searchFilter);
  //   }
  // }, [categorySearch, searchFilter]);
  // console.log(item);

  // const handleSearch = () => {
  //   const searchText = document.getElementById("searchText").value;
  //   products.map((p) => {
  //     const lowName = p.name.toLowerCase();
  //     if (searchText.toLowerCase().includes(lowName)) {
  //       searchResult.push(p);
  //     }
  //   });
  //   console.log(searchResult);
  //   setProducts([]);
  // };
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
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div class="flex justify-start ">
        <div class="mb-3 xl:w-80 flex pl-3 ">
          <select
            id="select"
            onChange={(e) => setCategory(e.target.value)}
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
            <option selected className="font-serif font-bold">
              Select Category
            </option>
            <option value="phone" className="font-serif font-bold">
              Phone
            </option>
            <option value="tool" className="font-serif font-bold">
              Tool
            </option>
            <option value="camera" className="font-serif font-bold">
              Camera
            </option>
          </select>
          <div>
            <button className=" ml-3 btn btn-primary  " onClick={() => reset()}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-center text-3xl font-extrabold font-serif mt-4">
        All Products
      </h1>
      <div className="flex justify-center">
        <div className="divider w-1/3 mt-0"></div>
      </div>
      <div className=" mt-2  card grid gap-4 md:grid-cols-2 lg:grid-cols-4 bg-base-100 p-3 lg:p-10">
        {search &&
          searchFilter.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        {categorys &&
          !search &&
          categorySearch.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        {!search &&
          !categorys &&
          products.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
