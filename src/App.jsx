import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import LoadingScreen from "./components/Loading";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import BlogPage from "./components/BlogPage";
import Blog from "./Pages/Blog";

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
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
