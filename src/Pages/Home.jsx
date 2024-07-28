import React, { useEffect } from "react";
import BlogSection from "../components/BlogSection";
import Hero from "../components/Hero";
import OurProfessional from "../components/OurProfessional";
import RecentProject from "../components/RecentProject";
import Testimonils from "../components/Testimonils";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <OurProfessional />
      <RecentProject />
      
      <BlogSection />

      <Testimonils />
    </div>
  );
}

export default Home;
