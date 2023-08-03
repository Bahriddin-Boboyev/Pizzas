import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
