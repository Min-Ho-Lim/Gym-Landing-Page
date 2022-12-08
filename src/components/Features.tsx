import React from "react";
import { Feature1 } from "../assets";

const Features = () => {
  return (
    <div className="bg-secondary p-20">
      <h1 className="text-4xl text-center text-white">Features</h1>
      <div className="flex flex-col md:flex-row justify-center items-center mt-20">
        <div className="flex flex-col items-center">
          <img src={Feature1} alt="Feature 1" className="w-96 h-96" />
          <h1 className="text-2xl text-white mt-10">Feature 1</h1>
          <p className="text-white text-center mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl vel tincidunt luctus, nunc nisl aliquet nisl, nec
            aliquet nisl nisl sit amet nisl. Sed euismod, nisl vel tincidunt
            luctus, nunc nisl aliquet nisl, nec aliquet nisl nisl sit amet nisl.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
