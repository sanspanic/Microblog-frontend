import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Imgs/Logo8_Navy.svg";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font border-b-2 border-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center justify-center md:justify-evenly text-black mb-4 md:mb-0"
        >
          <img alt="logo" className="w-1/6" src={Logo}></img>
          <span className="ml-3 text-xl">My2Cents</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/*           <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a> */}
        </nav>
        <Link
          to="/new"
          className="text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-indigo-800 focus:ring focus:outline-none inline-flex items-center border-0 py-1 px-3  mt-4 md:mt-0"
        >
          Add New Post
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
