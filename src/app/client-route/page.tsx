"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import { serverSideFunction } from "@/utils/server-utils";

// export default function ClientRoutePage(){
//     console.log("Client route rendered");
//     // const result = serverSideFunction();
//     return (
//         <>
//         <h1>ClientRoutePage</h1>
//         {/* <p>{result}</p> */}
//         </>
//     );
// }

import { useTheme } from '@/components/theme_provider';


export default function ImageSlider() {
    const theme = useTheme();
    const settings = {
      dots: true,
    };
    return (
        <>
    <h1 style={
        {
            color:theme.colors.primary
        }
    }>Client Route</h1>
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
      </>
    );
  }
  