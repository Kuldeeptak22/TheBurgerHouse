import React from "react";
import BurgerImage from "../assets/images/BurgerImage.png";
import FrenchFries from "../assets/images/FrenchFries.png";
import Drinks from "../assets/images/Drinks.png";
import Ellipse from "../assets/images/Ellipse.png";
const HeroSection = () => {
  return (
    <div className="flex burgerHouse">
      <div className="heading mx-10 mt-16">
        <div className="border_line">
          <p className="px-2 py-2">
            It is a good time for the great taste of burgers
          </p>
        </div>
        <div className="mainHeading mt-5 font-bold uppercase">
          <h1 className="BurgHead text-7xl">Burger</h1>
          <h3 className="text-5xl mt-3 week">Week</h3>
        </div>
      </div>
      <div className="Burgers ml-72 mt-36 mr-20 mx-auto">
        <img className="french w-52" src={FrenchFries} alt="FrenchFries" />
        <img className="burder1 w-64" src={BurgerImage} alt="burgerImage2" />
        <img className="coldDrinks w-28" src={Drinks} alt="Drinks" />
        <div className="price">
          <p className="text-center pt-4">
            <span className="text-4xl font-bold text-white">$5</span>
            <span className="text-white">.49</span> <br />
            <span className="text-white text-xl only">Only</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
