import React from "react";
import {
  TwitterLogo,
  GithubLogo,
  PencilLine,
  LinkedinLogo,
} from "phosphor-react";

const Footer = () => {
  return (
    <>
      <footer class="mt-6 text-gray-700 bg-white border-t body-font">
        <div class="container flex flex-col flex-wrap p-5 py-10 mx-auto lg:px-20 md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
          <div class="flex flex-wrap flex-grow mx-auto mt-10 -mb-10 text-left md:mt-0 ">
            <div class="w-full lg:w-1/3 md:w-full">
              <h1 class="mb-8 text-2xl font-bold text-center text-black lg:text-left lg:text-2xl title-font">
                This is not a real blog. If it was, it would likely be called
                something less basic than My2Cents.
              </h1>
            </div>
            <div class="w-full text-center lg:text-right lg:w-1/3 md:w-1/2 ">
              <h1 class="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font">
                Company
              </h1>
              <nav class="mb-10 list-none">
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
                    None of these
                  </a>
                </li>
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
                    Links actually work
                  </a>
                </li>
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
                    This is just for show
                  </a>
                </li>
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
                    So is this
                  </a>
                </li>
              </nav>
            </div>
            <div class="w-full text-center lg:text-right lg:w-1/3 md:w-1/2">
              <h1 class="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font">
                Legal
              </h1>
              <nav class="mb-10 list-none">
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
                    Terms Of Service
                  </a>
                </li>
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
                    Trademark Policy
                  </a>
                </li>
                <li>
                  <a class="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
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
                <TwitterLogo size={24} />
              </a>
              <a class="ml-4 text-white hover:text-indigo-500 transition ease-in-out duration-500">
                <GithubLogo size={24} />
              </a>
              <a class="ml-4 text-white hover:text-indigo-500 transition ease-in-out duration-500">
                <PencilLine size={24} />
              </a>
              <a class="ml-4 text-white hover:text-indigo-500 transition ease-in-out duration-500">
                <LinkedinLogo size={24} />
              </a>
            </span>
            <span className="text-center py-2 sm:ml-auto text-xs text-white">
              Made by sansPanic. I write code and I write about code.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
