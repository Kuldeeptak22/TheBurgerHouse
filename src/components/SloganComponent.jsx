import React from "react";

const SloganComponent = () => {
  return (
    <div className="slogan flex justify-between">
      <div className="burger2">
        <span className=" text-white try text-xl">Try it today</span>
        <br />
        <span className=" text-white most text-3xl">Most Popular Burger</span>
      </div>
      <div className="dubleBurger ml-7 flex-col">
        <div className="burger3 ">
          <span className="text-white tryit text-xl">Try it today</span>
          <br />
          <span className="text-white fun text-3xl"> More fun </span>
          <br />
          <span className="text-white taste text-3xl">more taste</span>
        </div>
        <div className="burger4">
          <span className="text-white today text-xl ">Try it today</span>
          <br />
          <span className="text-white fresh text-3xl">Fresh & Chili</span>
        </div>
      </div>
    </div>
  );
};

export default SloganComponent;
