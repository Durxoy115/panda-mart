import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import avatar from "../../images/avatar.png";

const UserRow = ({ user, index, refetch, setUserDelete }) => {
  const { email, photoURL } = user;

  const makeAdmin = () => {
    fetch(`https://panda-mart-server.onrender.com/user/admin/${email}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Make Admin Successfull");
      });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src={user?.photoURL ? photoURL : avatar} alt="" />
          </div>
        </div>
      </td>
      <td>{user.name}</td>
      <td>{email}</td>
      <td>
        {user.roll !== "admin" ? (
          <button
            onClick={makeAdmin}
            className="btn btn-xs btn-success text-white"
          >
            Make Admin
          </button>
        ) : (
          <span className="font-semibold text-xs flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="green"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            ADMIN
          </span>
        )}
      </td>

      <td>
        <label
          htmlFor="user-delete"
          onClick={() => setUserDelete(user)}
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
  );
};

export default UserRow;
