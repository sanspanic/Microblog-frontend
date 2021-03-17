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
      <footer className="yellow mt-6 text-gray-700 bg-white border-t border-black body-font">
        <div className="container flex flex-col flex-wrap p-5 py-10 mx-auto lg:px-20 md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
          <div className="flex flex-wrap flex-grow mx-auto mt-10 -mb-10 text-left md:mt-0 ">
            <div className="w-full lg:w-1/3 md:w-full">
              <h1 className="mb-8 text-2xl font-bold text-center text-purple-500 lg:text-left lg:text-2xl title-font">
                <span className="tracking-widest font-mono underline">
                  My2Cents
                </span>{" "}
                is an intentionally pretentious project practicing React state
                management.
              </h1>
            </div>
            <div className="w-full text-center lg:text-right lg:w-1/3 md:w-1/2 ">
              <h1 className="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font">
                Company
              </h1>
              <nav className="mb-10 list-none">
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    None of these
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Links actually work
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    This is just for show
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    So is this
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full text-center lg:text-right lg:w-1/3 md:w-1/2">
              <h1 className="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font">
                Legal
              </h1>
              <nav className="mb-10 list-none">
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Terms Of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Trademark Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    Inactivity Policy
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container flex flex-col flex-wrap px-5 py-6 mx-auto lg:px-20 sm:flex-row">
            <span className="inline-flex justify-center mt-2 sm:mt-0 sm:justify-start">
              <a
                href="https://twitter.com/sansPanicDev"
                className="ml-4 text-white hover:text-indigo-500 transition ease-in-out duration-500"
              >
                <TwitterLogo size={24} />
              </a>
              <a
                href="https://github.com/sanspanic"
                className="ml-4 text-white hover:text-indigo-500 transition ease-in-out duration-500"
              >
                <GithubLogo size={24} />
              </a>
              <a
                href="https://dev.to/sanspanic"
                className="ml-4 text-white hover:text-indigo-500 transition ease-in-out duration-500"
              >
                <PencilLine size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sandra-spanikova-6738aa1b7/"
                className="ml-4 text-white hover:text-indigo-500 transition ease-in-out duration-500"
              >
                <LinkedinLogo size={24} />
              </a>
            </span>
            <span className="font-mono text-center py-2 sm:ml-auto text-xs text-white">
              Made by sansPanic. I write code and I write about code.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
