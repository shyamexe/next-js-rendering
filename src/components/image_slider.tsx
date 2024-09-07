"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default function ImageSlider() {
    const settings = {
      dots: true,
    };
    return (
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
          <div>
            <img src="https://picsum.photos/402/201" />
          </div>
          <div>
            <img src="https://picsum.photos/404/202" />
          </div>
          <div>
            <img src="https://picsum.photos/406/203" />
          </div>
        </Slider>
      </div>
    );
  }
  