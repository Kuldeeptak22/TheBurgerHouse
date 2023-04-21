import React from "react";
import BurgerImage6 from "../assets/images/BurgerImage6.png";

const UpcomingEvents = () => {
  return (
    <div className="  my-36 h-full mx-10 flex justify-between upcomingEvents">
      <div className="py-5 px-7 b_1">
        <div className="text-2xl discover ">Discover</div>
        <br />
        <div className="upcoming text-3xl uppercase">Upcoming Events</div>
        <br />
        <div className="upcominLorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel.
        </div>
        <div className="check my-4">
          <span className="material-symbols-outlined radio">
            radio_button_unchecked
          </span>
          <span className="material-symbols-outlined radio">
            radio_button_unchecked
          </span>
          <span className="material-symbols-outlined radio">
            radio_button_unchecked
          </span>
        </div>
      </div>
      <div className="py-5 px-7 b_1">
        <img className="h-80 burger6" src={BurgerImage6} alt="BurgerImage6" />
      </div>
    </div>
  );
};

export default UpcomingEvents;
