import React, { useState } from "react";
import MainLogo from "../assets/images/MainLogo.png";
import scooter from "../assets/images/scooter.png";

const Navbar = () => {
  const menueIconClick = () => {
    const menueIconClick = document.getElementById("menu");
    menueIconClick.setAttribute("class", "show");
  };

  const crossIconClick = () => {
    const crossClick = document.getElementById("menu");
    crossClick.style.display = "none";
    window.location.reload();
  };
  return (
    <>
      <div className="Navbar flex mx-10 pt-5 justify-between">
        <div className="w-52">
          <a href="#">
            <img className="logo" src={MainLogo} alt="mainLogo" />
          </a>
        </div>
        <div className="flex-col">
          <div className="flex scooter">
            <img className="pr-4 h-8 scooty" src={scooter} alt="scooter" />
            <p className="pt-2">
              Express Delivery &nbsp;
              <a className="callme" href="tel:+91-9664408473">
                +91-9664408473
              </a>
            </p>
          </div>
          <div className="mt-6 ml-[-10rem] menu" id="menu">
            <ul className="flex justify-between text-lg">
              <span className="crossing" onClick={crossIconClick}>
                <i className="fa-solid fa-xmark text-white text-3xl"></i>
              </span>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menuIcon" onClick={menueIconClick}>
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
