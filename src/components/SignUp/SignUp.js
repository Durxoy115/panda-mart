import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import img from "../../images/g-logo.jpg";
import { toast } from "react-toastify";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, eUser, eLoading, eError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updatEerror] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const [token] = useToken(eUser || gUser);

  if (gloading || eLoading) {
    return <Loading></Loading>;
  }

  const handleGoogleSign = () => {
    signInWithGoogle();
  };

  if (token) {
    navigate("/");
    // window.location.reload();
  }
  const handleEmailAndPassword = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/");
  };

  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans ">
      <div className="flex items-center h-screen w-full ">
        <div className="w-full bg-white rounded shadow-lg p-6 m-4 md:max-w-sm md:mx-auto border-t-4 border-green-600">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Signup
          </span>
          <form
            onSubmit={handleEmailAndPassword}
            autoComplete="off"
            className="mb-4"
          >
            <div className="mb-4 md:w-full">
              <label htmlFor="name" className="block text-xs mb-1">
                Name
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4 md:w-full">
              <label htmlFor="email" className="block text-xs mb-1">
                Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3 md:w-full">
              <label htmlFor="password" className="block text-xs mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            <p>
              <small className="text-red-600 font-semibold">
                {eError?.message}
              </small>
            </p>

            <button
              type="submit"
              className="btn bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full"
            >
              Sign Up
            </button>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSign}
            className=" bg-blue-600 flex items-center justify-center h-10 btn hover:bg-blue-800 text-white uppercase text-sm font-semibold rounded w-full"
          >
            <img className=" mx-5 rounded-lg" width={40} src={img} alt="" />{" "}
            <p>SignIn With Google</p>
          </button>
          <div className="text-center mt-3">
            <small>
              Have an account?{" "}
              <strong className="hover:underline text-green-500 hover:text-green-700">
                <Link to="/login">Sign Up</Link>
              </strong>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
