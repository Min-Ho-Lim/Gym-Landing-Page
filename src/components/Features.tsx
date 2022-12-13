import React from "react";
import {
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Feature5,
  Feature6,
} from "../assets";

const features = [
  {
    image: Feature1,
    text: "ACCOUNTABILITY",
  },
  {
    image: Feature2,
    text: "VARIETY",
  },
  {
    image: Feature3,
    text: "SUPPORT",
  },
  {
    image: Feature4,
    text: "MOTIVATION",
  },
  {
    image: Feature5,
    text: "GUARANTEED RESULTS",
  },
  {
    image: Feature6,
    text: "SOCIAL ATMOSPHERE",
  },
];

const SingleFeature = (image: string | undefined, text: string) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={image}
        alt={text}
        className="w-20 h-20 md:w-40 md:h-40 hover:scale-105 transform transition duration-500 ease-in-out"
      />
      <div className="flex justify-center items-center font-poppins text-white text-lg md:text-2xl font-bold text-center mt-5 mb-5">
        {text.toUpperCase()}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div className="bg-secondary py-20">
      <h1 className="font-poppins font-bold text-5xl sm:text-6xl text-center text-white">
        Features
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 mt-20 justify-evenly">
        {features.map((feature) => {
          return SingleFeature(feature.image, feature.text);
        })}
      </div>
    </div>
  );
};

export default Features;
