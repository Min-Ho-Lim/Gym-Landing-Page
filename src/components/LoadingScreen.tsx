import React from 'react';

import { ClipLoader } from 'react-spinners';

export const LoadingScreen = () => {
  return (
    <div className=" absolute z-20 top-0 left-0 w-full h-screen bg-gray-50/95 flex justify-center items-center">
      <div className="flex flex-col gap-y-5 justify-center items-center">
        <ClipLoader color="#112048" size={50} speedMultiplier={0.8} />
        <p className="text-lg text-[#112048]">Loading...</p>
      </div>
    </div>
  );
};
