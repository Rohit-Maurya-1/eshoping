import React from "react";
import Image from "next/image";
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";
import third from "../assets/images/third.png";
import forth from "../assets/images/forth.png";
import five from "../assets/images/five.png";
const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={first} className="d-block w-100" alt="no" />
          
          </div>
          <div className="carousel-item">
            <Image src={second} className="d-block w-100" alt="no" />
          </div>
          <div className="carousel-item">
            <Image src={third} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <Image src={forth} className="d-block w-100" alt="no" />
          </div>
          <div className="carousel-item">
            <Image src={five} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
