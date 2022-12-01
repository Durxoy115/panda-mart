import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Checkout = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [error, setError] = useState([]);

  const {
    data: singleProduct,
    isLoading,
    refetch,
  } = useQuery("singleProduct", () =>
    fetch(`https://panda-mart-server.onrender.com/products/${id}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleBookOrder = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const img = singleProduct.img;
    const pId = singleProduct.id;
    const product_name = e.target.product_name.value;
    const orderQuantity = parseInt(e.target.quantity.value);
    const unit_price = parseInt(singleProduct.price);
    const price = parseInt(unit_price) * parseInt(orderQuantity);

    //create orders
    if (
      orderQuantity >= singleProduct.min_order &&
      orderQuantity <= singleProduct.quantity
    ) {
      const url = `https://panda-mart-server.onrender.com/order`;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          address,
          phone,
          product_name,
          price,
          orderQuantity,
          img,
          pId,
          unit_price,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === true) {
            toast.success("Order Placed Successfilly");
          }
          e.target.reset();
        });

      //update products quantity after make a order
      const quantity =
        parseInt(singleProduct.quantity) - parseInt(orderQuantity);
      const url2 = `https://panda-mart-server.onrender.com/products/${id}`;
      fetch(url2, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify({ quantity }),
      })
        .then((res) => res.json())
        .then((data) => {
          refetch();
          setError("");
        });
    } else {
      toast.error("order not placed");
      setError("make order between min_order and stock quantity");
    }
  };

  return (
    <div>
      <section>
        <div>
          <h1 className="text-4xl text-center font-bold mt-3">
            Booked Your Product!
          </h1>
          <div className="divider m-0 w-1/3 mx-auto"></div>
        </div>

        <form
          onSubmit={handleBookOrder}
          className="card grid lg:grid-cols-2 md:grid-cols-1 lg:gap-20 min-w-full md:w-2/5 bg-base-100 card-body text-center "
        >
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={user?.displayName}
                readOnly
                disabled
                className="input input-bordered input-accent w-full"
              />

              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                value={user?.email}
                placeholder="Email"
                readOnly
                disabled
                className="input input-bordered input-accent w-full "
              />

              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                name="product_name"
                type="text"
                value={singleProduct?.name}
                readOnly
                disabled
                placeholder="Product Name"
                className="input input-bordered input-accent w-full "
              />

              <label className="label">
                <span className="label-text">Min_Order</span>
              </label>
              <input
                name="min_order"
                type="number"
                placeholder="Min-Order"
                readOnly
                disabled
                value={singleProduct?.min_order}
                className="input input-bordered input-accent w-full "
              />
            </div>
          </div>

          <div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                name="address"
                type="text"
                placeholder="Address"
                required
                className="input input-bordered input-accent w-full "
              />

              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                name="phone"
                type="text"
                required
                placeholder="Phone Number"
                className="input input-bordered input-accent w-full "
              />

              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                name="quantity"
                type="number"
                placeholder="Quantity"
                required
                className="input input-bordered input-accent w-full "
              />
              <label className="label">
                <span className="label-text-alt text-red-600">
                  {error ? error : ""}
                </span>
              </label>

              <button className="btn btn-success mt-4 w-full text-white">
                Check Out
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
