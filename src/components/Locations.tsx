import React from "react";

const Locations = () => {
  return (
    <div className="bg-secondary grid grid-cols-1 sm:grid-cols-2">
      <div className="flex">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10785898.502299316!2d-89.50454240659556!3d38.29083713805545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5f71d32858d7%3A0x20d6f89653cf50c4!2sNash%20Square!5e0!3m2!1sen!2sus!4v1670881658015!5m2!1sen!2sus"
            className="w-screen sm:w-[50vw] h-[50vh] brightness-50"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="relative flex flex-col p-[6vw]">
        <h1 className="font-poppins text-2xl md:text-6xl font-bold">
          Locations
        </h1>
        <h2 className="font-poppins text-sm md:text-lg">
          Our gym are in the multiple places for your convinience
        </h2>

        <div className="mt-3 md:mt-10 max-w-sm flex flex-col ">
          <input
            placeholder="Enter Your Zip Code"
            className="pl-6 p-3 rounded-full border-none border-2 bg-primary text-white font-poppins font-bold hover:transition duration-300 hover:bg-white hover:text-primary focus:outline-none focus:ring focus:ring-white focus:bg-white focus:text-primary"
          ></input>
          <button className="bg-primary text-white font-poppins font-bold p-3 rounded-full mt-3 border-2 border-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Locations;
