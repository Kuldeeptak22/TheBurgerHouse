import React from "react";
import bottomLogo from "../assets/images/bottomLogo.png";

const FinalComponent = () => {
  return (
    <div className="finalComponent h-[72vh] mx-16">
      <div className="finalComponentInner p-8">
        <div>
          <img className="bottomLogo  w-72" src={bottomLogo} alt="bottomLogo" />
        </div>
        <div className="flex final-text justify-between my-10 mr-[7rem]">
          <div className="text-white w-[45vw] text_lorems">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas
            accumsan lacus vel facilisis.
          </div>
          <div className="flex-col contacta">
            <div className="contact">
              <span className="material-symbols-outlined text-white px-2">
                location_on
              </span>
              <span className="text-white text-xl address">
                Amli Road ,Pindwara
              </span>
            </div>
            <div className="contact">
              <span className="material-symbols-outlined text-white px-2">
                mail
              </span>
              <span className="text-white text-xl mail">
                Kuldeeptak2211@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 flex justify-between copyright">
        <div className="compo">
          <span className="text-xl text-white"> &copy; </span>
          <span className="compony text-xl text-white">
            Burger House 2020. All rights reserved.
          </span>
        </div>
        <div className="text-2xl social ">
          <a href="">
            <i className="fa-brands fa-instagram px-2 text-white"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-facebook px-2 text-white"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter px-2 text-white"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-whatsapp px-2 text-white"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FinalComponent;
