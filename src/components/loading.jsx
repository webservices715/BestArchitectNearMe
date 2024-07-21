import React, { useState, useEffect } from "react";
import "../css/loading.css"; 

function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // 5 seconds to match the animation duration

    const slideInTimer = setTimeout(() => {
      setSlideIn(true);
    }, 5000); // Trigger slide-in animation after 5 seconds

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(slideInTimer);
    };
  }, []);

  if (!isVisible && !slideIn) return null;

  return (
    <div className={`loading-screen fixed inset-0 flex items-center justify-center bg-black z-50 ${slideIn ? 'slide-in' : ''}`}>
      <div className="loading-bar bar1"></div>
      <div className="loading-bar bar2"></div>
      <div className="loading-bar bar3"></div>
    </div>
  );
}

export default LoadingScreen;
