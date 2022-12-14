import React from "react";

import { LoadingSpinner } from "../assets";

export const LoadingScreen = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-zinc-900">
      <div className="flex flex-col items-center justify-center gap-10 w-24 animate-pulse">
        <img
          src={LoadingSpinner}
          alt="Loading spinner"
          className="animate-spin-slow"
        />
        <p className="animate-pulse text-2xl font-poppins tracking-wider text-white">
          Loading...
        </p>
      </div>
    </div>
  );
};
