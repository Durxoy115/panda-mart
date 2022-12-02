import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import avatar from "../../images/avatar.png";

const Header = () => {
  const [user] = useAuthState(auth);

  const menu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      {/* <li>
        <Link to="/blogs">Blogs</Link>
      </li> */}
      <li>
        <Link to="/about">About</Link>
      </li>

      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      {/* <li>
        <Link to="/portfolio">Portfolio</Link>
      </li> */}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 border-b-4 border-yellow-500">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {menu}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case flex font-serif text-3xl"
          >
            Panda Mart
            <div>
              <small className=" text-sm text-orange-600 flex-row">.com</small>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-semibold">{menu}</ul>
        </div>
        <div className="navbar-end flex justify-end align-center dropdown">
          <label tabIndex={0} className=" ">
            <div className="avatar invisible sm:visible ">
              <div className="w-8 rounded-full">
                <img
                  color="white"
                  src={user?.photoURL ? user?.photoURL : avatar}
                  alt=""
                />
              </div>
            </div>
          </label>

          <h1 className="font-semibold text-orange-600 btn btn-ghost invisible sm:visible">
            {user ? user.displayName : ""}
          </h1>
          <label
            tabIndex="1"
            htmlFor="dashboard-drawer"
            className="btn btn-ghost drawer-button lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              {user ? (
                <button
                  onClick={() => {
                    signOut(auth);
                    toast("Log Out Successfull");
                  }}
                  className="font-semibold"
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login">Log in</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
