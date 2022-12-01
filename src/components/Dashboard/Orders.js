import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../components/Loading/Loading";

import DeleteModel from "./DeleteModel";
import { useQuery } from "react-query";

const Orders = () => {
  const [user] = useAuthState(auth);
  // const [orders, setOrders] = useState([]);
  const [orderDelete, setOrderDelete] = useState(null);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(
      `https://panda-mart-server.onrender.com/order?email=${user.email}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="lg:card lg:card-body shadow-lg">
      <div>
        <h1 className="text-2xl font-bold mb-3">Order History</h1>
        <hr className="mb-5" />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead className=" ">
            <tr>
              <th>P.Image</th>
              <th>P.name</th>
              {/* <th>Email</th> */}
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
              <th>Remark</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={order.img} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{order.product_name}</td>
                {/* <td>{order.email}</td> */}
                <td>{order.orderQuantity}</td>
                <td>{order.unit_price}</td>
                <td>{order.price}</td>
                <td>
                  <button className="btn btn-xs btn-success text-white">
                    Paid
                  </button>
                </td>
                <td>
                  <label
                    htmlFor="order-delete"
                    onClick={() => setOrderDelete(order)}
                    tabIndex="0"
                  >
                    <FontAwesomeIcon
                      className=" p-1 cursor-pointer btn modal-button text-red-600 btn-ghost btn-circle btn-xs"
                      size="xs"
                      icon={faTrash}
                    />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {orderDelete && (
        <DeleteModel
          key={orderDelete.id}
          setOrderDelete={setOrderDelete}
          orderDelete={orderDelete}
          refetch={refetch}
        ></DeleteModel>
      )}
    </div>
  );
};

export default Orders;
