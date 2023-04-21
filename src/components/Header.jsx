import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <div className="header h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Header;
