import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      {/* display simple image */}
      <div className="flex justify-center">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_960_720.jpg"
          alt="gym"
          className="w-screen h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default App;
