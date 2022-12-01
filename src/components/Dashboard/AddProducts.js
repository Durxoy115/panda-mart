import React from "react";
import { toast } from "react-toastify";

const AddProducts = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const addProduct = {
      name: e.target.pname.value,
      description: e.target.description.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      category: e.target.category.value,
      img: e.target.image.value,
    };

    const url = `https://panda-mart-server.onrender.com/addproduct`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Add Product Successfully");
        e.target.reset();
      });
  };

  return (
    <div className="card card-bordered shadow-lg p-8">
      <div>
        <h1 className="text-2xl font-bold ">Add Products</h1>
        <hr className="mt-3 mb-3" />
      </div>
      <div>
        <form
          onSubmit={handleAddProduct}
          className=" overflow-visible mx-auto items-center text-center mt-2"
        >
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="pname"
              placeholder="Product Name"
              className="input input-bordered input-info input-sm w-full"
            />

            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea
              name="description"
              type=" text-area"
              placeholder="Description"
              className="textarea textarea-info w-full"
            />

            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              type="number"
              placeholder="Price"
              className="input input-bordered input-info input-sm w-full "
            />

            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              name="quantity"
              type="number"
              placeholder="Quantity"
              className="input input-bordered input-info input-sm w-full "
            />

            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              name="category"
              type="text"
              placeholder="Category"
              className="input input-bordered input-info input-sm w-full "
            />

            <label className="label">
              <span className="label-text">Image Link</span>
            </label>
            <input
              name="image"
              type="text"
              placeholder="Only link is accepted"
              className="input input-bordered input-info input-sm w-full "
            />

            <button className="btn btn-info text-white btn-sm mt-5">
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
