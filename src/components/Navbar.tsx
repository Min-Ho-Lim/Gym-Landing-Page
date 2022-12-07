import React from "react";
import { GymName } from "../constants";

const Navbar = () => {
  return (
    // create tailwind navbar
    <nav className="flex items-center justify-between flex-wrap bg-primary p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M27 0C12.088 0 0 12.088 0 27s12.088 27 27 27 27-12.088 27-27S41.912 0 27 0zm0 51C13.745 51 3 40.255 3 27S13.745 3 27 3s24 10.745 24 24-10.745 24-24 24z" />
          <path d="M27 9c-9.374 0-17 7.626-17 17s7.626 17 17 17 17-7.626 17-17-7.626-17-17-17zm0 30c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z" />
          <path d="M27 18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 13c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
        </svg>
        <span className="font-poppins font-semibold text-3xl tracking-tight">
          {GymName}
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {/* tailwind center items */}

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:pl-5">
        <div className="font-poppins text-sm lg:flex-grow lg:justify-items-center">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-gray-200 hover:underline hover:scale-125 transform transition duration-200 ease-in-out mr-7"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white hover:underline hover:scale-125 transform transition duration-200 ease-in-out mr-7"
          >
            Find a Club
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white hover:underline hover:scale-125 transform transition duration-200 ease-in-out mr-7"
          >
            Fitness Experiences
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white hover:underline hover:scale-125 transform transition duration-200 ease-in-out"
          >
            Blog
          </a>
        </div>
        <div>
          <a
            href="#"
            className="transition ease-in-out delay-50 inline-block font-poppins font-bold text-md px-8 py-2 leading-none border rounded-full text-primary bg-white border-white hover:text-white hover:bg-primary hover:border-white mt-4 lg:mt-0"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
