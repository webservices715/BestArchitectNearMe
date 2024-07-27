import React from "react";
import "../css/loading.css";

function LoadingScreen() {
  return (
    <div className="loading-screen fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="loading-bar bar1"></div>
      <div className="loading-bar bar2"></div>
      <div className="loading-bar bar3"></div>
    </div>
  );
}

export default LoadingScreen;
