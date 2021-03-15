import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="mt-6 text-gray-700 bg-white border-t body-font">
        <div class="container flex flex-col flex-wrap p-5 py-10 mx-auto lg:px-20 md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
          <div class="flex flex-wrap flex-grow mx-auto mt-10 -mb-10 text-left md:mt-0 ">
            <div class="w-full lg:w-1/3 md:w-full">
              <h1 class="mb-8 text-2xl font-bold text-center text-black lg:text-left lg:text-2xl title-font">
                A pretty long lenght display headline ready to convert visitors
                into users.
              </h1>
            </div>
            <div class="w-full text-right lg:w-1/3 md:w-1/2 ">
              <h1 class="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font">
                Company
              </h1>
              <nav class="mb-10 list-none">
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800">
                    Carriers
                  </a>
                </li>
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800">
                    Pricing
                  </a>
                </li>
              </nav>
            </div>
            <div class="w-full text-right lg:w-1/3 md:w-1/2">
              <h1 class="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font">
                Legal
              </h1>
              <nav class="mb-10 list-none">
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800">
                    Terms Of Service
                  </a>
                </li>
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800">
                    Trademark Policy
                  </a>
                </li>
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800">
                    Inactivity Policy
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-black">
          <div class="container flex flex-col flex-wrap px-5 py-6 mx-auto lg:px-20 sm:flex-row">
            <span class="inline-flex justify-center mt-2 sm:mt-0 sm:justify-start">
              <a class="ml-4 text-white hover:text-indigo-500 transition ease-in-out duration-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
