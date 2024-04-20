import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const navItems = (
    <>
      <li className=" font-bold text-xl">
        <Link to="/">
          <a>Home</a>
        </Link>
      </li>
      <li className=" font-bold text-xl">
        <Link to="/course">
          <a>Course</a>
        </Link>
      </li>
      <li className=" font-bold text-xl">
        <Link to="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold mx-28 cursor-pointer">BookStore</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className=" hidden md:block w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          {/* Conditional rendering for login/logout button */}
          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn mx-10 bg-black">Logout</button>
          ) : (
            <>
              <a
                onClick={() => document.getElementById("my_modal_3").showModal()}
                className="btn mx-10 bg-black"
              >
                Login
              </a>
              <Login onLogin={handleLogin} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
