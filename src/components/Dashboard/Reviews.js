import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Reviews = () => {
  const [user] = useAuthState(auth);

  const handleReview = (e) => {
    e.preventDefault();
    const review = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    const url = `https://panda-mart-server.onrender.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Review Add Successfully");
        e.target.reset();
      });
  };

  return (
    <div className="mx-auto card card-bordered shadow-lg p-5">
      <div>
        <h1 className="text-2xl font-bold ">Review</h1>
        <hr className="mt-3 mb-3" />
      </div>
      <form onSubmit={handleReview} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              value={user.displayName}
              readOnly
              name="name"
              placeholder="Name"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              name="email"
              value={user.email}
              readOnly
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              name="message"
              required
            ></textarea>
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow btn btn-accent hover:bg-teal-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded=md"
              type="submit"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reviews;
