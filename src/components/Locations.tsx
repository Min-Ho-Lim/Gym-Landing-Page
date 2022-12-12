import React from "react";

const Locations = () => {
  return (
    <div className="bg-secondary">
      <div className="relative left-[10%] flex flex-col p-20">
        <h1 className="font-poppins text-6xl font-bold">Locations</h1>
        <h2 className="font-poppins text-md">
          Our gym are in the multiple places for your convinience
        </h2>

        <div className="mt-10">
          <input
            placeholder="Enter Your Zip Code"
            className="pl-6 p-3 rounded-full border-none border-2 bg-primary text-white font-poppins font-bold hover:transition duration-300 hover:bg-white hover:text-primary focus:outline-none focus:ring focus:ring-white focus:bg-white focus:text-primary"
          ></input>
          <button className="bg-primary text-white font-poppins font-bold p-3 rounded-full ml-4">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Locations;
