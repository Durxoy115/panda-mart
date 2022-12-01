import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  const name = user?.user?.displayName;
  const photoURL = user?.user?.photoURL;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const email = user?.user?.email;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const currentUser = { email: email, name: name, photoURL: photoURL };
  useEffect(() => {
    if (email) {
      fetch(`https://panda-mart-server.onrender.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [user, currentUser, email]);
  return [token];
};
export default useToken;
