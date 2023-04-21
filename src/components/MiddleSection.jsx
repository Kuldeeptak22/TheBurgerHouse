import React from "react";
import SloganComponent from "./SloganComponent";
import ChooseAndEnjoy from "./ChooseAndEnjoy";
import OrderNow from "./OrderNow";
import UpcomingEvents from "./UpcomingEvents";

const MiddleSection = () => {
  return (
    <div className="my-20 mx-8 middleSection">
      <SloganComponent />
      <ChooseAndEnjoy />
      <OrderNow />
      <UpcomingEvents />
    </div>
  );
};

export default MiddleSection;
