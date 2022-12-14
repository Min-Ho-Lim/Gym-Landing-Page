import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { GymName } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faFacebookSquare,
  faTwitterSquare,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  library.add(fab, faFacebookSquare, faTwitterSquare, faGooglePlusSquare);
  return (
    <footer className="w-full h-100 lg:h-60 p-10 font-poppins">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div>
          <div className="flex">
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
          <div className="font-md">
            The body achieves what the mind believes.
          </div>
          <div className="flex flex-row gap-6 mt-8">
            <a
              href="#"
              className="text-2xl text-gray-200 hover:text-gray-200 hover:scale-150 transform transition duration-200 ease-in-out"
            >
              <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            </a>
            <a
              href="#"
              className="text-2xl text-gray-200 hover:text-gray-200 hover:scale-150 transform transition duration-200 ease-in-out"
            >
              <FontAwesomeIcon icon={["fab", "twitter-square"]} />
            </a>
            <a
              href="#"
              className="text-2xl text-gray-200 hover:text-gray-200 hover:scale-150 transform transition duration-200 ease-in-out"
            >
              <FontAwesomeIcon icon={["fab", "google-plus-square"]} />
            </a>
          </div>
        </div>
        <div className="flex flex-col mt-6 md:mt-0">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col md:text-right mr-4 gap-4 md:gap-0">
              <a
                className="text-gray-200 hover:text-gray-200 hover:underline hover:scale-110 transform transition duration-200 ease-in-out"
                href="#"
              >
                Find A Club
              </a>
              <a
                className="md:mt-3 text-gray-200 hover:text-gray-200 hover:underline hover:scale-110 transform transition duration-200 ease-in-out"
                href="#"
              >
                Fitness Exprience
              </a>
              <a
                className="md:mt-3 text-gray-200 hover:text-gray-200 hover:underline hover:scale-110 transform transition duration-200 ease-in-out"
                href="#"
              >
                Blog
              </a>
            </div>
            <div className="flex flex-col md:text-right gap-4 md:gap-0">
              <a
                className="text-gray-200 hover:text-gray-200 hover:underline hover:scale-110 transform transition duration-200 ease-in-out"
                href="#"
              >
                About Us
              </a>
              <a
                className="md:mt-3 text-gray-200 hover:text-gray-200 hover:underline hover:scale-110 transform transition duration-200 ease-in-out"
                href="#"
              >
                Contact Us
              </a>
              <a
                className="md:mt-3 text-gray-200 hover:text-gray-200 hover:underline hover:scale-110 transform transition duration-200 ease-in-out"
                href="#"
              >
                Location
              </a>
            </div>
          </div>
          <small className="mt-6 text-right">
            &copy; Copyright 2022, Life2Fit
          </small>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
