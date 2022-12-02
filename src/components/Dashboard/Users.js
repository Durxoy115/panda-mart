import { useState } from "react";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import UserDelete from "./UserDelete";
import UserRow from "./UserRow";

const Users = () => {
  const [userDelete, setUserDelete] = useState(null);
  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch(`https://panda-mart-server.onrender.com/user`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="card shadow-lg">
      <div>
        <h1 className="text-2xl font-bold mb-3">All Users</h1>
        <hr className="mb-5" />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>SL.No</th>
              <td>Avatar</td>
              <th>User Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                refetch={refetch}
                index={index}
                setUserDelete={setUserDelete}
              ></UserRow>
            ))}
          </tbody>
        </table>
        {userDelete && (
          <UserDelete
            key={userDelete.id}
            setUserDelete={setUserDelete}
            userDelete={userDelete}
            refetch={refetch}
          ></UserDelete>
        )}
      </div>
    </div>
  );
};

export default Users;
