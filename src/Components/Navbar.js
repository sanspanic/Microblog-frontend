import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Imgs/logo.png";

const Navbar = () => {
  return (
    <header className="background text-gray-600 body-font border-b-2 border-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center justify-between">
        <Link
          to="/"
          className="flex title-font font-medium items-center justify-center md:justify-evenly text-black mb-4 md:mb-0"
        >
          <img alt="logo" className="w-2/6 " src={Logo}></img>
          <span className="text-xl font-mono font-black tracking-widest">
            My2Cents
          </span>
        </Link>
        {/*         <nav className="mx-auto flex flex-wrap items-center text-base justify-center"></nav>
         */}{" "}
        <Link
          to="/new"
          className="text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-indigo-500 focus:ring focus:outline-none inline-flex items-center border-0 py-1 px-3  mt-4 md:mt-0"
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
