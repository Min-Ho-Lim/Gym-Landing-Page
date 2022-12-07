import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-screen bg-primary">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
