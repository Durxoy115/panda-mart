import React from "react";
import { toast } from "react-toastify";

const UserDelete = ({ userDelete, setUserDelete, refetch }) => {
  const { _id, email } = userDelete;
  console.log(_id);
  const handleDelete = () => {
    const url = `https://panda-mart-server.onrender.com/user/${_id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast("User Successfully Deleted");
        refetch();
        setUserDelete(null);
      });
  };
  return (
    <div>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="user-delete" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="user-delete"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Are u sure want to Delete?</h3>
          <p className="py-4 text-red-600 font-semibold">{email}</p>
          <div className="flex justify-end">
            <label htmlFor="user-delete" className="btn btn-accent btn-sm mr-3">
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

export default UserDelete;
