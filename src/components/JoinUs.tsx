import React from "react";
import { WorkOutVideo } from "../assets";

const JoinUs = () => {
  return (
    <div>
      <div className="relative w-screen h-screen">
        <video
          autoPlay
          loop
          muted
          className="object-cover h-screen w-screen z-10 brightness-50 "
        >
          <source src={WorkOutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute flex flex-col justify-center content-center z-50 top-1/2 left-1/2">
          <h1 className="text-white font-poppins text-5xl sm:text-7xl md:text-9xl font-bold">
            JOIN US
          </h1>
          <h2 className="text-white font-poppins text-sm sm:text-md md:text-xl font-bold md:self-end">
            Now or Never. Start your journey with us.
          </h2>
          <a
            className="rounded-full border-white bg-white text-primary font-poppins text-2xl font-extrabold text-center p-3 mt-3 w-2/3 sm:w-1/2 md:self-end cursor-pointer
           hover:text-primary hover:scale-110 transform transition duration-250 ease-in-out"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
