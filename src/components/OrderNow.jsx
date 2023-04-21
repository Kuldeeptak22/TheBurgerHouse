import React from "react";
import Burger5 from "../assets/images/Burger5.png";
import Shadow from "../assets/images/Shadow.png";
import BurgerImage from "../assets/images/BurgerImage.png";

const OrderNow = () => {
  return (
    <div className="flex justify-between text-center ordernow">
      <div className="px-2 py-2 box1">
        <div>
          <img className="firstBurger" src={Burger5} alt="Burger5" />
        </div>
        <div className="shadows">
          <img className="w-[26rem]" src={Shadow} alt="Shadow" />
        </div>
        <div className="text-3xl dolor dolor my-4 cheese">
          Cheese Chicken Burger
        </div>
        <div className=" ord_2">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        </div>
        <div className="my-4">
          <button className="orderNowButton text-white px-6 py-2">
            Order Now
          </button>
        </div>
      </div>
      <div className="px-2 py-2 box1">
        <div className="middle">
          <img
            className="middleburger w-80"
            src={BurgerImage}
            alt="BurgerImage"
          />
        </div>
        <div className="shadows">
          <img className="w-[26rem]" src={Shadow} alt="Shadow" />
        </div>
        <div className="text-3xl dolor dolor my-4">Butter Chicken Burger</div>
        <div className=" ord_2">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        </div>
        <div className="my-4">
          <button className="orderNowButton text-white px-6 py-2">
            Order Now
          </button>
        </div>
      </div>
      <div className="px-2 py-2 box1">
        <div>
          <img className="firstBurger" src={Burger5} alt="Burger5" />
        </div>
        <div className="shadows">
          <img className="w-[26rem]" src={Shadow} alt="Shadow" />
        </div>
        <div className="text-3xl dolor dolor my-4">Special Cassata Burger</div>
        <div className=" ord_2">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
        </div>
        <div className="my-4">
          <button className="orderNowButton text-white px-6 py-2">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
