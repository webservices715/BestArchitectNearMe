import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
