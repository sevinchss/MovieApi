import React from "react";
import "./canals.scss"
import img1 from "./images/image1.png"
import img2 from "./images/image2.png"
import img3 from "./images/image3.png"
import img4 from "./images/image4.png"
import img5 from "./images/image5.png"
import img6 from "./images/image6.png"
import img7 from "./images/image7.png"
import img8 from "./images/imag8.png"
export const Canals = () => {
  return (
    <>
      <div class="kanal mb-4">
        <div class="kanal container">
          <h1>Онлайн тв</h1>
          <div class="kanallar">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
          
          </div>
        </div>
      </div>
    </>
  );
};
