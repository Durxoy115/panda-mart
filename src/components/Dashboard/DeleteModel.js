import React from "react";
import { toast } from "react-toastify";

const DeleteModel = ({ orderDelete, setOrderDelete, refetch }) => {
  const { product_name, orderQuantity, _id } = orderDelete;

  const handleDelete = () => {
    const url = `https://panda-mart-server.onrender.com/order/${_id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Item Successfully Deleted");
        refetch();
        setOrderDelete(null);
      });
  };

  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="order-delete" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="order-delete"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Are u sure want to Delete?</h3>
          <p className="py-4 text-red-600 font-semibold">
            {product_name} which quantity {orderQuantity}
          </p>
          <div className="flex justify-end">
            <label
              htmlFor="order-delete"
              className="btn btn-accent btn-sm mr-3"
            >
              Cancel
            </label>
            <button
              onClick={() => handleDelete()}
              className="btn btn-error btn-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModel;
