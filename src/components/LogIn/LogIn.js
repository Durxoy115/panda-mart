import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import img from "../../images/g-logo.jpg";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import useToken from "../../hooks/useToken";

const LogIn = () => {
  const [signInWithGoogle, gUser, gloading] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    const [token] = useToken(gUser);
  
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  if (error) {
    toast.warning(error.message);
  }

  if (gloading || loading) {
    return <Loading></Loading>;
  }

  const handleGoogleSign = () => {
    signInWithGoogle();
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signInWithEmailAndPassword(email, password);
  };

  if (user || gUser) {
    navigate(from, { replace: true });
    
  }

  return (
    <div className="antialiased bg-gray-200 text-gray-900 font-sans ">
      <div className="flex items-center h-screen w-full ">
        <div className="w-full bg-white rounded shadow-lg p-6 m-4 md:max-w-sm md:mx-auto border-t-4 border-purple-600">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Login
          </span>
          <form onSubmit={handleSignIn} className="mb-4">
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
            <div className="mb-5">
              <a
                className="text-blue-700 text-center text-sm hover:underline hover:font-semibold"
                href="/login"
              >
                Forgot password?
              </a>
            </div>

            <button className="bg-purple-500 h-10 hover:bg-purple-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full">
              Login
            </button>
          </form>

          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSign}
            className="bg-slate-200 flex items-center justify-center h-10 hover:bg-slate-400 text-black uppercase text-sm font-semibold rounded w-full"
          >
            <img className=" mx-5 rounded-md" width={35} src={img} alt="" />{" "}
            <p>SignIn With Google</p>
          </button>
          <div className="text-center mt-3">
            <small>
              Don't have an account?
              <strong className="hover:underline text-green-500 hover:text-green-700">
                <Link to="/SignUp"> Sign Up</Link>
              </strong>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
