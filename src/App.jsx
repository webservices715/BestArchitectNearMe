import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import LoadingScreen from "./components/LoadingScreen";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import BlogPage from "./components/BlogPage";
import Blog from "./Pages/Blog";
import Architects from "./Pages/Architects";
import Hiring from "./Pages/Hiring";
import ArchitectDetail from "./Pages/ArchitectDetail";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/architects" element={<Architects />} />
            <Route path="/hiring" element={<Hiring />} />
            <Route path="/architectdetail/:id" Component={ArchitectDetail} />

          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
