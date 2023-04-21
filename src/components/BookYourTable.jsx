import React from "react";
import Burger7 from "../assets/images/Burger7.png";
import Bottle from "../assets/images/Bottle.png";
import burgerPlate from "../assets/images/burgerPlate.png";

const BookYourTable = () => {
  return (
    <div className="flex justify-between BookYourTable">
      <div className="bot-bug">
        <div className="burga">
          <img className="Burger7" src={Burger7} alt="Burger7" />
        </div>
        <div className="bot">
          <img className="bottle" src={Bottle} alt="Bottle" />
        </div>
      </div>
      <div className="form">
        <div className="headline">
          <span className="text-2xl reserve font-bold">Reservation</span> <br />
          <span className="text-5xl book font-bold uppercase">
            Book your Table
          </span>
        </div>
        <div className=" my-16">
          <form action="" className="flex justify-between formInput">
            <div className="flex-col">
              <div className="inputField my-4">
                <input
                  type="text"
                  className="border py-2 px-6 rounded-sm inp"
                  placeholder="Name"
                />
              </div>
              <div className="inputField my-4">
                <input
                  type="text"
                  className="border py-2 px-6 rounded-sm inp"
                  placeholder="Date"
                />
              </div>
              <div className="inputField my-4">
                <input
                  type="text"
                  className="border py-2 px-6 rounded-sm inp"
                  placeholder="People"
                />
              </div>
            </div>
            <div className="flex-col inp2">
              <div className="inputField my-4 ">
                <input
                  type="text"
                  className="border py-2 px-6 rounded-sm inp"
                  placeholder="Email"
                />
              </div>
              <div className="inputField my-4">
                <input
                  type="text"
                  className="border py-2 px-6 rounded-sm inp"
                  placeholder="Time"
                />
              </div>
              <div className="inputField my-4">
                <button className="py-2 btnFindATable rounded-sm">
                  Find A Table
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="burgerPlate1">
        <img className="burgerPlate" src={burgerPlate} alt="burgerPlate" />
      </div>
    </div>
  );
};

export default BookYourTable;
