import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
    </>
  );
}

export default App;
