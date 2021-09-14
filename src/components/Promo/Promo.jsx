import React from "react";
import { Carousel } from "antd";
import imageOne from "../../assets/images/carousel-1.jpg";
import imageTwo from "../../assets/images/carousel-2.jpg";
import imageThree from "../../assets/images/carousel-3.jpg";
import "./promo.css";

const Promo = () => {
  return (
    <div className="promo-container">
      <div className="carousel-container-one">
        <Carousel autoplay>
          <div>
            <img src={imageOne} alt="carousel" className="carousel-img" />
            <p className="carousel-text">
              Our wines are organic and approved by the Organic Trade
              Association
            </p>
          </div>
          <div>
            <img src={imageTwo} alt="carousel" className="carousel-img" />
            <p className="carousel-text">
              Winner of the 2021 Best Red Wine Awards
            </p>
          </div>
          <div>
            <img src={imageThree} alt="carousel" className="carousel-img" />
            <p className="carousel-text">
              We don't compromise on authenticity. Santo is 100% Italian.
            </p>
          </div>
        </Carousel>
      </div>
      <div className="special-offer-container">
        <h2 className="special-offer-text">
          ENDING SOON: Buy 3 Bottles, get 1 free.
        </h2>
      </div>
    </div>
  );
};

export default Promo;
