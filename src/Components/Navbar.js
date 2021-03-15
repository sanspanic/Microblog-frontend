import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/Imgs/Logo8_Navy.svg";

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font border-b-2 border-black">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center justify-center md:justify-evenly text-black mb-4 md:mb-0">
          <img className="w-1/6" src={Logo}></img>
          <span class="ml-3 text-xl">My2Cents</span>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">First Link</a>
          <a class="mr-5 hover:text-gray-900">Second Link</a>
        </nav>
        <Link
          to="/new"
          class="text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-indigo-800 focus:ring focus:outline-none inline-flex items-center border-0 py-1 px-3  mt-4 md:mt-0"
        >
          Add New Post
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
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
