import { useState } from "react";
import { useEffect } from "react";
import React from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    let email = user?.email;
    console.log(email);
    if (email) {
      fetch(`https://panda-mart-server.onrender.com/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin));
    }
  }, [user]);

  return [admin];
};

export default useAdmin;
