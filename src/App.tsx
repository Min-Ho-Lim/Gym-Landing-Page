import React from "react";
import Features from "./components/Features";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-screen bg-primary">
      <Navbar />
      <Main />
      <Features />
    </div>
  );
};

export default App;
